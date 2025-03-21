'use client'
import React, { useState, useEffect, useMemo } from 'react';
import Layout from '../../components/layout/Layout';
import Link from 'next/link';
import Image from 'next/image';
import publications from './publications';
import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import GlobalImage from '../../components/common/GlobalImage';
function renderMathTitle(title: string) {
  const parts = title.split(/(\$\$.*?\$\$)/g);
  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith('$$') && part.endsWith('$$')) {
          const mathContent = part.slice(2, -2);
          return <InlineMath key={index} math={mathContent} />;
        }
        return part;
      })}
    </>
  );
}

export default function PublicationsPage() {
  // 状态管理
  const [currentPage, setCurrentPage] = useState(1);
  const [publicationsPerPage] = useState(6);
  const [yearFilter, setYearFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  
  const allPublications = publications;

  const availableYears = useMemo(() => {
    const years = [...new Set(allPublications.map(pub => pub.year))];
    return years.sort((a, b) => b - a); // 降序排序，最新的年份在前
  }, [allPublications]);


  // 初始化过滤后的出版物状态，默认为排序后的所有出版物
  const [filteredPublications, setFilteredPublications] = useState(() => {
    // 按年份降序排序（最新的在前面），同年份内按类型排序（journal > conference > abstract）
    return [...allPublications].sort((a, b) => {
      if (a.year !== b.year) {
        return b.year - a.year; // 年份降序
      }
      if (a.month && b.month && a.month !== b.month) {
        return b.month - a.month; // 月份降序（较新的月份排在前面）
      }
      
      // 同年份按类型优先级排序
      const typeOrder = { journal: 1, conference: 2, abstract: 3 };
      return (typeOrder[a.type as keyof typeof typeOrder] || 99) - 
             (typeOrder[b.type as keyof typeof typeOrder] || 99);
    });
  });

  const availableTypes = useMemo(() => {
    const types = [...new Set(allPublications.map(pub => pub.type))];
    return types.sort(); // 按字母顺序排序类型
  }, [allPublications]);

  const typeDisplayNames = {
    journal: "Journal Articles",
    conference: "Conference Papers",
    abstract: "Abstract",
    book: "Book Chapters",
    thesis: "Theses"
    // 可以根据需要添加更多类型
  };

  // 过滤和排序文章
  useEffect(() => {
    let results = [...allPublications];
    
    // 按年份过滤
    if (yearFilter !== 'all') {
      results = results.filter(pub => pub.year === parseInt(yearFilter));
    }
    
    // 按类型过滤
    if (typeFilter !== 'all') {
      results = results.filter(pub => pub.type === typeFilter);
    }
    
    // 按年份降序排序（最新的在前面），同年份内按类型排序
    results.sort((a, b) => {
      if (a.year !== b.year) {
        return b.year - a.year; // 年份降序
      }
      
      // 同年份按类型优先级排序
      const typeOrder = { journal: 1, conference: 2, abstract: 3 };
      return (typeOrder[a.type as keyof typeof typeOrder] || 99) - 
             (typeOrder[b.type as keyof typeof typeOrder] || 99);
    });
    
    setFilteredPublications(results);
    setCurrentPage(1); // 重置到第一页
  }, [yearFilter, typeFilter, allPublications]);

  // 处理年份筛选变化
  const handleYearFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setYearFilter(e.target.value);
  };

  // 处理类型筛选变化 - 修复类型定义
  const handleTypeFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTypeFilter(e.target.value);
  };

  // 计算当前页的出版物
  const indexOfLastPublication = currentPage * publicationsPerPage;
  const indexOfFirstPublication = indexOfLastPublication - publicationsPerPage;
  const currentPublications = filteredPublications.slice(indexOfFirstPublication, indexOfLastPublication);

  // 计算总页数
  const totalPages = Math.ceil(filteredPublications.length / publicationsPerPage);

  // 生成页码
  const pageNumbers = [];
  const maxPageButtons = 5; // 最多显示的页码按钮数
  
  let startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
  const endPage = Math.min(totalPages, startPage + maxPageButtons - 1);
  
  if (endPage - startPage + 1 < maxPageButtons && startPage > 1) {
    startPage = Math.max(1, endPage - maxPageButtons + 1);
  }
  
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  // 处理页面更改
  const paginate = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      // 在Next.js中，避免直接使用window对象，改用更安全的方法
      try {
        // 只在客户端执行滚动
        if (typeof window !== 'undefined') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } catch (error) {
        console.error('Failed to scroll:', error);
      }
    }
  };
  

  return (
    <Layout>
      
      {/* Main Content */}
      <main id="content" className="py-8">
        <div className="container mx-auto px-4">
          {/* <h1 className="text-3xl text-[#0a3b76] mb-5 pb-3 border-b border-gray-200">Publications</h1> */}
          
          {/* Filter Controls */}
          <div className="mb-8 flex flex-wrap items-center gap-4">
          <div className="flex items-center">
              <label htmlFor="year-filter" className="mr-2 text-sm text-gray-700">Year:</label>
              <select 
                id="year-filter" 
                className="py-1.5 px-3 border border-gray-300 rounded"
                value={yearFilter}
                onChange={handleYearFilterChange}
              >
                <option value="all">All Years</option>
                {availableYears.map(year => (
                  <option key={year} value={year.toString()}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="flex items-center">
              <label htmlFor="type-filter" className="mr-2 text-sm text-gray-700">Type:</label>
              <select 
                id="type-filter" 
                className="py-1.5 px-3 border border-gray-300 rounded"
                value={typeFilter}
                onChange={handleTypeFilterChange}
              >
                <option value="all">All Types</option>
                {availableTypes.map(type => (
                  <option key={type} value={type}>
                    {typeDisplayNames[type as keyof typeof typeDisplayNames] || type.charAt(0).toUpperCase() + type.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="flex-1 md:text-right">
              <Link href="https://scholar.google.com.hk/citations?user=AWI7KUsAAAAJ&hl=zh-CN" className="text-[#3c8dbc] hover:underline">
                See All
              </Link>
            </div>
          </div>
          
          {/* Results Count */}
          <div className="mb-4 text-sm text-gray-600">
            Showing {filteredPublications.length > 0 ? indexOfFirstPublication + 1 : 0} - {Math.min(indexOfLastPublication, filteredPublications.length)} of {filteredPublications.length} publications
          </div>
          
          {/* Publications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 ">
            {currentPublications.length > 0 ? (
              currentPublications.map((publication) => (
                <div 
                  key={publication.id} 
                  className="border border-gray-200 rounded-md overflow-hidden shadow-sm hover:shadow-md hover:scale-105 ease-in-out transition-all duration-300"
                >
                  <div className="h-48 bg-gray-200 relative">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                      {publication.image ? (
                        <div className="relative w-full h-full">
                          <GlobalImage 
                            src={publication.image} 
                            alt={publication.title} 
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-fill"
                            priority
                          />
                        </div>
                      ) : (
                        <span>No image available</span>
                      )}
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="text-sm text-gray-500 mb-1">{publication.year}</div>
                    <h3 className="text-lg font-medium text-gray-600 mb-2">
                      {renderMathTitle(publication.title)}
                    </h3>
                    <div className="text-sm text-gray-600 mb-2">{publication.authors}</div>
                    <div className="text-sm italic text-gray-600 mb-4">{publication.journal}</div>
                    
                    <div className="flex gap-2">
                      {publication.links.map((link, index) => (
                        link.label !== "PDF" ?(
                        <Link 
                          key={index}
                          href={link.url} 
                          className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm hover:bg-gray-200 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.label}
                        </Link>) : null
                      ))}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-1 md:col-span-2 lg:col-span-3 py-8 text-center text-gray-500">
                No publications found matching your filters.
              </div>
            )}
          </div>
          
          {/* Pagination */}
          {filteredPublications.length > 0 && (
            <div className="flex justify-center my-8">
              <nav className="flex items-center gap-1">
                <button 
                  className={`px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
                
                {startPage > 1 && (
                  <>
                    <button 
                      className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100"
                      onClick={() => paginate(1)}
                    >
                      1
                    </button>
                    {startPage > 2 && <span className="px-2">...</span>}
                  </>
                )}
                
                {pageNumbers.map(number => (
                  <button
                    key={number}
                    onClick={() => paginate(number)}
                    className={`px-3 py-1 rounded ${currentPage === number ? 'bg-gray-700 text-white' : 'border border-gray-300 hover:bg-gray-100'}`}
                  >
                    {number}
                  </button>
                ))}
                
                {endPage < totalPages && (
                  <>
                    {endPage < totalPages - 1 && <span className="px-2">...</span>}
                    <button 
                      className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100"
                      onClick={() => paginate(totalPages)}
                    >
                      {totalPages}
                    </button>
                  </>
                )}
                
                <button 
                  className={`px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages || totalPages === 0}
                >
                  Next
                </button>
              </nav>
            </div>
          )}
          
          {/* Additional Information */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-xl text-gray-500 mb-4">Additional Information</h2>
            <div className="prose max-w-none">
              <p>We share our research findings and provide comprehensive documentation on this page for your reference. We warmly welcome you to explore our work while respecting our intellectual property by properly citing our contributions when appropriate. We enthusiastically welcome potential collaborations and invite you to reach out through our “CONTACT US” page.</p>
              {/* <p className="mt-4">
                <strong>Citation Policy:</strong> When referencing our work, please cite the corresponding paper using 
                the provided DOI links. All publications are also listed in our institutional repository.
              </p> */}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}