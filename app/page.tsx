export default function Home() {
  const featuredProducts = [
    {
      name: "Máy massage xung điện trị liệu Omron HV-F013",
      price: "1.200.000đ / Hộp",
      unit: "DVT: Hộp",
    },
    {
      name: "Mặt nạ xông khí dung Greentec nebulizer mask",
      price: "21.000đ / Cái",
      unit: "DVT: Cái",
    },
    {
      name: "Đầu kim tiểu đường 33G x 4mm Pic Insupen",
      price: "250.000đ / Hộp",
      unit: "DVT: Hộp",
    },
  ];

  return (
    <div className="pb-20">
      <section className="mx-auto w-full max-w-7xl px-4 pt-5 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[6px] bg-[linear-gradient(180deg,#f8fbff,#edf6ff)] p-5">
            <div className="space-y-4 pt-3">
              <h1 className="max-w-xl font-display text-[42px] font-extrabold leading-[0.98] tracking-tight text-[var(--color-ink)]">
                Mua sắm <span className="text-[var(--color-brand)]">AN TÂM</span>
                <br />
                <span className="text-[var(--color-brand)]">SỐNG KHỎE</span> mỗi
                ngày
              </h1>
              <p className="max-w-md text-[16px] leading-6 text-[var(--color-ink)]">
                MediShop đồng hành cùng gia đình bạn trên hành trình chăm sóc
                sức khỏe mỗi ngày.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="/faq"
                  className="inline-flex items-center justify-center rounded-[8px] bg-[var(--color-brand)] px-5 py-3 text-sm font-bold text-white"
                >
                  KHÁM PHÁ NGAY
                </a>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-line)] bg-white text-[var(--color-brand)]">
                  +
                </span>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[6px] border border-[var(--color-line)] bg-[linear-gradient(145deg,#cde7ff,#8ab8e7_55%,#dceeff)] p-4">
            <div className="relative flex h-full min-h-[250px] items-end justify-end rounded-[4px] bg-[radial-gradient(circle_at_left,#eef7ff_0,#d4e9ff_38%,transparent_39%),linear-gradient(120deg,#c7e0f6,#93bde5)] px-6 py-6">
              <div className="absolute left-6 top-6 space-y-2">
                <div className="h-3 w-20 rounded-full bg-white/55" />
                <div className="h-3 w-28 rounded-full bg-white/40" />
              </div>
              <div className="grid w-[68%] grid-cols-3 gap-3">
                <div className="h-44 rounded-[90px] bg-[#6f98c0]" />
                <div className="h-52 rounded-[90px] bg-[#87aed4]" />
                <div className="h-48 rounded-[90px] bg-[#a2c4e8]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-5 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featuredProducts.map((item, index) => (
            <article
              key={item.name}
              className="rounded-[6px] border border-[#e5edf5] bg-white p-4 shadow-[0_1px_0_rgba(255,255,255,0.65)]"
            >
              <div
                className="mb-4 flex aspect-[1/0.88] items-center justify-center rounded-[4px] bg-[linear-gradient(180deg,#fefefe,#edf5fc)]"
                aria-hidden="true"
              >
                <div
                  className={`rounded-2xl ${
                    index === 0
                      ? "h-28 w-24 bg-[#9eb8d0]"
                      : index === 1
                        ? "h-28 w-16 rotate-12 bg-[#9ee8f3]"
                        : "h-24 w-24 bg-[#ffd56e]"
                  }`}
                />
              </div>
              <h2 className="min-h-12 text-[14px] leading-5 text-[var(--color-ink)]">
                {item.name}
              </h2>
              <p className="mt-3 inline-flex rounded-[4px] bg-[var(--color-brand)] px-2 py-1 text-[12px] font-bold text-white">
                {item.price}
              </p>
              <p className="mt-2 text-[12px] text-[var(--color-muted)]">
                {item.unit}
              </p>
              <a
                href="/faq"
                className="mt-4 inline-flex items-center justify-center rounded-[6px] bg-[var(--color-brand)] px-4 py-2 text-[12px] font-semibold text-white"
              >
                Thêm vào giỏ hàng
              </a>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
