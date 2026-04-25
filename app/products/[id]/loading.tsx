export default function Loading() {
  return (
    <div className="max-w-6xl mx-auto p-6 md:p-10 animate-pulse">
      {/* Skeleton Breadcrumb */}
      <div className="h-4 bg-gray-200 rounded w-48 mb-8"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Skeleton Ảnh (Cột trái) */}
        <div className="bg-gray-200 rounded-2xl aspect-square w-full"></div>

        {/* Skeleton Thông tin (Cột phải) */}
        <div className="flex flex-col space-y-6">
          {/* Tên sản phẩm */}
          <div className="h-10 bg-gray-200 rounded-lg w-3/4"></div>
          
          {/* Giá và badge */}
          <div className="flex gap-4">
            <div className="h-8 bg-gray-200 rounded w-32"></div>
            <div className="h-8 bg-gray-200 rounded-full w-20"></div>
          </div>

          {/* Mô tả */}
          <div className="space-y-3 pt-6 border-t border-gray-100">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3"></div>
          </div>

          {/* Nút bấm & Số lượng */}
          <div className="pt-10 space-y-4">
            <div className="h-12 bg-gray-200 rounded-xl w-32"></div>
            <div className="h-14 bg-gray-200 rounded-lg w-full md:w-80"></div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
