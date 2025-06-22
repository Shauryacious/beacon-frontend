// src/components/RiskRankingTable.jsx
import React, { useEffect, useState } from "react";
import {
  fetchPendingProducts,
  approveProduct,
  takedownProduct,
} from "../api/productApi";
import Card from "./Card";
import CardHeader from "./CardHeader";
import { BarChart2, MoreVertical } from "lucide-react";

const getScoreBadge = (score) => {
  if (score > 0.8)
    return "bg-green-100 text-green-800 border border-transparent";
  if (score > 0.5)
    return "bg-yellow-100 text-yellow-800 border border-transparent";
  return "bg-red-100 text-red-800 border border-transparent";
};

export default function RiskRankingTable() {
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState({ page: 1, pages: 1, total: 0 });
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(null); // productId or null
  const [error, setError] = useState("");

  const fetchData = async (page = 1) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetchPendingProducts({ page });
      setProducts(res.data.products || []);
      setPagination({ ...res.data.pagination });
    } catch (err) {
      setError("Failed to load products.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(pagination.page);
    // eslint-disable-next-line
  }, [pagination.page]);

  const handleApprove = async (id) => {
    setActionLoading(id);
    setError("");
    try {
      await approveProduct(id);
      await fetchData(pagination.page);
    } catch (err) {
      setError(err.response?.data?.error || "Failed to approve product.");
    } finally {
      setActionLoading(null);
    }
  };

  const handleTakedown = async (id) => {
    setActionLoading(id);
    setError("");
    try {
      await takedownProduct(id, "Admin takedown from dashboard");
      await fetchData(pagination.page);
    } catch (err) {
      setError(err.response?.data?.error || "Failed to takedown product.");
    } finally {
      setActionLoading(null);
    }
  };

  return (
    <Card className="lg:col-span-3 flex flex-col border-app bg-app-card shadow-sm rounded-b-xl overflow-hidden">
      <CardHeader
        title="Pending Product Risk Review"
        icon={BarChart2}
        className="border-b border-app bg-app-table-header"
      >
        <button className="px-3 py-1.5 text-sm font-medium text-white bg-[color:var(--color-accent)] rounded-lg hover:bg-yellow-400 focus:ring-2 focus:ring-[color:var(--color-accent)]/50 transition-colors">
          Bulk Action
        </button>
      </CardHeader>
      <div className="flex-grow overflow-x-auto">
        {error && (
          <div className="text-red-500 text-sm text-center py-2">{error}</div>
        )}
        <table className="w-full text-sm text-app border-separate border-spacing-0">
          <thead className="text-xs uppercase bg-app-table-header sticky top-0 z-10">
            <tr>
              <th className="p-4 w-4">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-[color:var(--color-accent)] bg-app-card border-app rounded focus:ring-[color:var(--color-accent)]"
                />
              </th>
              <th className="px-4 py-3 font-medium whitespace-nowrap">SKU</th>
              <th className="px-4 py-3 font-medium whitespace-nowrap">
                Product Name
              </th>
              <th className="px-4 py-3 font-medium whitespace-nowrap">
                Seller
              </th>
              <th className="px-4 py-3 font-medium whitespace-nowrap">
                Trust Score
              </th>
              <th className="px-4 py-3 font-medium whitespace-nowrap">
                Detected Flags
              </th>
              <th className="px-4 py-3 font-medium whitespace-nowrap">
                Status
              </th>
              <th className="px-4 py-3 font-medium whitespace-nowrap">
                Last Updated
              </th>
              <th className="px-4 py-3 font-medium text-center whitespace-nowrap">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y border-app">
            {loading ? (
              <tr>
                <td colSpan={9} className="text-center py-8">
                  Loading...
                </td>
              </tr>
            ) : products.length === 0 ? (
              <tr>
                <td colSpan={9} className="text-center py-8 text-gray-500">
                  No pending products found.
                </td>
              </tr>
            ) : (
              products.map((product) => (
                <tr
                  key={product._id}
                  className="bg-app-card hover:bg-[color:var(--color-bg)] transition-colors"
                >
                  <td className="p-4 w-4">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-[color:var(--color-accent)] bg-app-card border-app rounded focus:ring-[color:var(--color-accent)]"
                    />
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-app-muted">
                    {product.sku}
                  </td>
                  <td className="px-4 py-3 font-medium text-app">
                    {product.name}
                  </td>
                  <td className="px-4 py-3 font-medium text-app">
                    {product.seller?.businessName || "N/A"}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-semibold ${getScoreBadge(
                        product.trustScore ?? 0
                      )}`}
                    >
                      {typeof product.trustScore === "number"
                        ? (product.trustScore * 100).toFixed(0)
                        : "--"}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex flex-wrap gap-1.5">
                      {(product.flags || []).map((flag) => (
                        <span
                          key={flag}
                          className="px-2.5 py-1 text-xs font-medium bg-[color:var(--color-flag-bg)] text-app border border-[color:var(--color-flag-border)] rounded-full"
                        >
                          {flag}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-3">{product.status}</td>
                  <td className="px-4 py-3 text-app-muted">
                    {product.updatedAt
                      ? new Date(product.updatedAt).toLocaleString()
                      : "--"}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex gap-2 justify-center">
                      <button
                        className="px-3 py-1 text-xs font-semibold rounded bg-green-600 text-white hover:bg-green-700 disabled:opacity-60"
                        disabled={actionLoading === product._id}
                        onClick={() => handleApprove(product._id)}
                      >
                        {actionLoading === product._id ? "..." : "Approve"}
                      </button>
                      <button
                        className="px-3 py-1 text-xs font-semibold rounded bg-red-600 text-white hover:bg-red-700 disabled:opacity-60"
                        disabled={actionLoading === product._id}
                        onClick={() => handleTakedown(product._id)}
                      >
                        {actionLoading === product._id ? "..." : "Takedown"}
                      </button>
                      <button className="p-1.5 rounded-md hover:bg-app-table-header text-app-muted hover:text-app transition-colors">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      {/* Pagination controls */}
      <div className="flex justify-end items-center gap-2 p-4 border-t border-app">
        <button
          className="px-3 py-1 rounded border bg-white"
          disabled={pagination.page <= 1}
          onClick={() =>
            setPagination((prev) => ({ ...prev, page: prev.page - 1 }))
          }
        >
          Prev
        </button>
        <span>
          Page {pagination.page} of {pagination.pages}
        </span>
        <button
          className="px-3 py-1 rounded border bg-white"
          disabled={pagination.page >= pagination.pages}
          onClick={() =>
            setPagination((prev) => ({ ...prev, page: prev.page + 1 }))
          }
        >
          Next
        </button>
      </div>
    </Card>
  );
}
