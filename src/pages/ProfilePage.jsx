import React from "react";
import { useAuth } from "../context/AuthContext";

export default function ProfilePage() {
  const { user, loading } = useAuth();

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-[40vh]">
        <div className="text-[#FF9900] text-lg font-semibold animate-pulse">
          Loading...
        </div>
      </div>
    );

  if (!user)
    return (
      <div className="flex items-center justify-center min-h-[40vh]">
        <div className="bg-white dark:bg-slate-800 px-8 py-6 rounded-lg shadow text-slate-700 dark:text-slate-100 text-lg font-medium border border-slate-200 dark:border-slate-700">
          Please log in to view your profile.
        </div>
      </div>
    );

  return (
    <div className="max-w-xl mx-auto mt-16 p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
      <div className="flex items-center gap-4 mb-6">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-1">
            Profile
          </h2>
          <span className="text-sm text-slate-500 dark:text-slate-400">
            Welcome back!
          </span>
        </div>
      </div>
      <div className="space-y-4">
        <div>
          <span className="block text-xs uppercase text-slate-500 dark:text-slate-400 tracking-wide">
            Email
          </span>
          <span className="block text-base font-medium text-slate-900 dark:text-slate-100">
            {user.email}
          </span>
        </div>
        <div>
          <span className="block text-xs uppercase text-slate-500 dark:text-slate-400 tracking-wide">
            User ID
          </span>
          <span className="block text-base font-mono text-[#FF9900]">
            {user.userId || user._id}
          </span>
        </div>
      </div>
    </div>
  );
}
