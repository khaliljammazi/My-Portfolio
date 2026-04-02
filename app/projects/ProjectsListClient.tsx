"use client";

import { useState, useMemo } from "react";
import { motion } from "motion/react";
import { projects } from "@/data/projects";
import { Search, Filter, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsListClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    projects.forEach((p) => p.tags.forEach((t) => tags.add(t)));
    return Array.from(tags).sort();
  }, []);

  // Filter projects based on search and tags
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        searchQuery === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.some((tag) => project.tags.includes(tag));

      return matchesSearch && matchesTags;
    });
  }, [searchQuery, selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedTags([]);
  };

  return (
    <main className="min-h-screen pt-24 pb-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[var(--secondary)] to-[hsl(var(--primary))] bg-clip-text text-transparent">
            All Projects
          </h1>
          <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
            Explore my portfolio of web development projects, from enterprise
            applications to innovative mobile apps.
          </p>
        </motion.div>

        {/* Search & Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[hsl(var(--muted-foreground))]" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full bg-[hsl(var(--card))] border border-[hsl(var(--border))] focus:border-[var(--secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--secondary)]/20 transition-all text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full border transition-all ${
                showFilters || selectedTags.length > 0
                  ? "bg-[var(--secondary)] border-[var(--secondary)] text-white"
                  : "bg-[hsl(var(--card))] border-[hsl(var(--border))] hover:border-[var(--secondary)]"
              }`}
            >
              <Filter className="w-4 h-4" />
              <span>Filter</span>
              {selectedTags.length > 0 && (
                <span className="bg-white/20 px-2 py-0.5 rounded-full text-sm">
                  {selectedTags.length}
                </span>
              )}
            </button>

            {/* Clear Filters */}
            {(searchQuery || selectedTags.length > 0) && (
              <button
                onClick={clearFilters}
                className="text-[var(--secondary)] hover:underline text-sm"
              >
                Clear all
              </button>
            )}
          </div>

          {/* Tags Filter */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-6 flex flex-wrap gap-2 justify-center"
            >
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedTags.includes(tag)
                      ? "bg-[var(--secondary)] text-white"
                      : "bg-[hsl(var(--card))] border border-[hsl(var(--border))] hover:border-[var(--secondary)] text-[hsl(var(--foreground))]"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </motion.div>
          )}
        </motion.div>

        {/* Results Count */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-[hsl(var(--muted-foreground))] mb-8"
        >
          Showing {filteredProjects.length} of {projects.length} projects
        </motion.p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link href={`/projects/${project.slug}`}>
                <article className="group relative bg-[hsl(var(--card))] rounded-2xl overflow-hidden border border-[hsl(var(--border))] hover:border-[var(--secondary)] transition-all duration-300 hover:shadow-xl hover:shadow-[var(--secondary)]/10 hover:-translate-y-1">
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Featured Badge */}
                    {project.featured && (
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[var(--secondary)] text-white text-xs font-semibold">
                        Featured
                      </span>
                    )}
                    
                    {/* Year Badge */}
                    <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs font-medium">
                      {project.year}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-xl font-bold mb-2 text-[hsl(var(--foreground))] group-hover:text-[var(--secondary)] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[hsl(var(--muted-foreground))] mb-4 line-clamp-2">
                      {project.shortDescription}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs font-medium rounded-md bg-[var(--secondary)]/10 text-[var(--secondary)]"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2.5 py-1 text-xs font-medium rounded-md bg-[hsl(var(--muted))]/50 text-[hsl(var(--muted-foreground))]">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-[var(--secondary)]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="px-6 py-3 rounded-full bg-white text-[var(--secondary)] font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      View Project →
                    </span>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2 text-[hsl(var(--foreground))]">
              No projects found
            </h3>
            <p className="text-[hsl(var(--muted-foreground))] mb-4">
              Try adjusting your search or filters
            </p>
            <button
              onClick={clearFilters}
              className="px-6 py-2 rounded-full bg-[var(--secondary)] text-white hover:opacity-90 transition-opacity"
            >
              Clear filters
            </button>
          </motion.div>
        )}
      </div>
    </main>
  );
}
