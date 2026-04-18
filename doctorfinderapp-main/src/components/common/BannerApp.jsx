import React from 'react'

export default function BannerApp() {
  return (
   <main className="pt-20">
  {/* Hero Section */}
  <section className="relative min-h-[870px] flex items-center px-4 sm:px-8">
    <div className="absolute inset-0 z-0">
      <img
        className="w-full h-full object-cover brightness-[0.96]"
        data-alt="Modern clinical hospital lobby with floor-to-ceiling windows, soft natural light, and clean minimalist architectural lines in white and soft blue tones"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbblIIC2_GqJDBQsZUIip5YE_Vk9iCYkv_cJqqQtjCWmOwUFEH4KkKYjqqVe1_4CFln4GOppDVcsK2fV5W_2tnW8ojt8rdrbMx7V2sLiQRz01SjXqPOw3Pia5xBUl-VIB2hhVIsXOv2PauZiaJ_XZnvez2wkCKO1x4EAkypwxhn1mqdakJrpvjje9dogKHVXYwpQVy5M0vWZFeJQvWe-qpC9_PmSxak_yaMtQbAI9fdwUACp_-vAQ6ei_YUwvxrKytqcqVB2CDMSw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/60 to-transparent" />
    </div>
    <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="space-y-7 sm:space-y-8">
        <div className="space-y-4">
          <span className="inline-block bg-secondary-container text-on-secondary-container px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase font-label">
            Excellence in Care
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-primary leading-[1.1] tracking-tight">
            A Sanctuary for <span className="text-secondary">Healing</span>{" "}
            &amp; Precision.
          </h1>
          <p className="text-base sm:text-lg text-on-surface-variant max-w-lg leading-relaxed font-body">
            Combining world-class clinical expertise with an editorial approach
            to patient care. Discover the future of medicine at Krishna
            Hospitals.
          </p>
        </div>
        {/* Hero Search */}
        <div className="bg-surface-container-lowest p-2 rounded-[2rem] sm:rounded-full shadow-lg flex flex-col md:flex-row items-stretch md:items-center gap-2 md:gap-0 max-w-2xl border border-outline-variant/10">
          <div className="flex items-center flex-1 px-3 sm:px-4 w-full min-h-12">
            <span className="material-symbols-outlined text-primary/60 mr-3">
              search
            </span>
            <input
              className="w-full bg-transparent border-none focus:ring-0 text-on-surface placeholder:text-outline py-3 sm:py-4 font-body text-base"
              placeholder="Doctor, Specialization, or Location"
              type="text"
            />
          </div>
          <button className="bg-primary text-on-primary px-6 sm:px-10 py-3 rounded-full font-bold text-sm tracking-wide hover:shadow-xl transition-all w-full md:w-auto">
            SEARCH
          </button>
        </div>
        <div className="flex items-center space-x-8 pt-4">
          <div className="flex -space-x-3">
            <img
              className="w-12 h-12 rounded-full border-4 border-surface-container-lowest object-cover"
              data-alt="Close-up portrait of a professional female doctor smiling confidently"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGL0h0GsGlz1UsL2Xxh6S5raCrHkjhvsmhiiVedrTCmOH7idb4ZLyZxHt9ES2Ivk5X301OoZVyufuABcHEoje3TNT2nNyWat36xk2_46kZegOlD_rn3Ku6GlnCygwrRJHIoL5EGFWidUTbnq2tvL5yKS3VnAze6dSyjyTKPI1EJ865920E09rkGUOGYoduAOgRj9JH5UHbaDAlGUjmGkcDx8beaYN07x2slkT4idfnUMnSCCNKhgMr2UASu-OlCBinA_Iz8fEPw3c"
            />
            <img
              className="w-12 h-12 rounded-full border-4 border-surface-container-lowest object-cover"
              data-alt="Professional male surgeon in clinical attire with soft lighting"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQa3Tq2wF5HsZ5LAXmSmQV_aA7yMuSgeMICBSxTIkUdFrgOpUt8uO9AbxTCOIIqdIAGgrMCH-kX1956-dQePawNtR95M46b8svZvg6n4hhM4YxLwCgxiow-7e9C0y4AKVWSWuFNh69NeOtiSflPrm1_O6y4fdplnqYMuWZT52FrU0I8ruac_QH3WTsZDLhC9t2cAhd3aNSocQUHT2t62jFbbtEeWYUAbC2iQsB-DaE6FNlcMn14MAWZg37nwKX9QZC_eyiYyH06eU"
            />
            <img
              className="w-12 h-12 rounded-full border-4 border-surface-container-lowest object-cover"
              data-alt="Headshot of a friendly medical professional in a modern clinic setting"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuClybFlehkItVNhB23bUKp4pGiJnaUK10Xxu-QXdaqhkEthOVfU6Erz6WBxSuk1CBjrZwdwYpqmDce8b8btzY8QxwQIOHxYOtV0NHdBuyUzEgpKmUbtGB8DBQL4f2FCw0p--__a5dQgj7I2biB2VVGeby5O-KCu62wR7cSmB5qHCML32REL7hy_DVOV006vb-s8L54S8-7k3-EN2HjgYLC3lBfBkbcLPGWQIgC27_qcT_qQyuH3xerkallZlznD3dNQaUnCxE-ZRQQ"
            />
          </div>
          <div className="text-sm">
            <span className="block font-bold text-primary">
              500+ Specialists
            </span>
            <span className="text-on-surface-variant">
              Trusted by 20,000+ patients
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

  )
}
