interface WarrantyInfoProps {
  warranty: string
}

export function WarrantyInfo({ warranty = "24 Tháng" }: WarrantyInfoProps) {
  return (
    <div className="bg-white rounded-lg p-4">
      <h2 className="text-base font-bold text-[#27272a] mb-4">Thông tin bảo hành</h2>

      <div className="space-y-3">
        <div className="flex items-center">
          <span className="text-sm text-gray-600 w-40">Thời gian bảo hành:</span>
          <span className="font-medium text-[#27272a] text-sm">{warranty}</span>
        </div>

        <div className="flex items-center">
          <span className="text-sm text-gray-600 w-40">Hình thức bảo hành:</span>
          <span className="font-medium text-[#27272a] text-sm">Hóa đơn</span>
        </div>

        <div className="flex items-center">
          <span className="text-sm text-gray-600 w-40">Nơi bảo hành:</span>
          <span className="font-medium text-[#27272a] text-sm">Bảo hành chính hãng</span>
        </div>
      </div>
    </div>
  )
}
