import React, { useEffect, useState, useCallback } from "react";
import CompanyCard from "../../components/common/CompanyCard";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { fetchCompanies } from "../../api/api";
import { CompanyData } from "../../types";
import { useTranslation } from "react-i18next";

const CACHE_KEY = "featured_companies";
const CACHE_TIMESTAMP_KEY = "featured_companies_timestamp";
const CACHE_EXPIRY = 24 * 60 * 60 * 1000; // 24 hours

const FeaturedCompanies: React.FC = React.memo(() => {
  const { t } = useTranslation();
  const [companies, setCompanies] = useState<CompanyData[]>([]);

  // Load from cache if valid
  useEffect(() => {
    const cached = localStorage.getItem(CACHE_KEY);
    const timestamp = localStorage.getItem(CACHE_TIMESTAMP_KEY);
    if (cached && timestamp) {
      const age = Date.now() - parseInt(timestamp, 10);
      if (age < CACHE_EXPIRY) {
        setCompanies(JSON.parse(cached));
      }
    }
  }, []);

  // Fetch companies and update cache and state
  const loadCompanies = useCallback(async () => {
    try {
      const response = await fetchCompanies();
      const data = response.data.slice(0, 9);
      setCompanies(data);
      localStorage.setItem(CACHE_KEY, JSON.stringify(data));
      localStorage.setItem(CACHE_TIMESTAMP_KEY, Date.now().toString());
    } catch (error) {
      console.error("Error fetching companies:", error);
    }
  }, []);

  // Always revalidate on mount (background update)
  useEffect(() => {
    loadCompanies();
  }, [loadCompanies]);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-4 flex items-end justify-between ">
          <div>
            <h2 className="mb-3 text-3xl font-bold text-gray-900 md:text-4xl">
              {t("featured_companies")}
            </h2>
            <p className="max-w-2xl text-lg text-gray-600">
              {t("dicover_top_rated")}
            </p>
          </div>

          <Link
            to="/companies"
            className="hidden items-center text-[#3B546A] transition-colors hover:text-[#2A3E50] md:flex"
          >
            {t("view_all")}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {companies.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link
            to="/companies"
            className="inline-flex items-center font-medium text-[#3B546A] transition-colors hover:text-[#2A3E50]"
          >
            {t("view_all_companies")}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
});

export default FeaturedCompanies;
