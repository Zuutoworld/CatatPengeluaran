// ============================================================
// Catat Duit — Expense Tracker App
// Stack: HTML + CSS + Vanilla JS + Chart.js
// Storage: LocalStorage
// ============================================================

// --- i18n ---
const translations = {
  id: {
    appName: "Money Management",
    monthSpending: "Pengeluaran bulan ini",
    monthBalance: "Saldo bulan ini",
    balanceToday: "Saldo hari ini",
    balanceWeek: "Saldo minggu ini",
    monthIncome: "Pemasukan bulan ini",
    monthExpense: "Pengeluaran bulan ini",
    income: "Pemasukan",
    expense: "Pengeluaran",
    type: "Jenis",
    allTypes: "Semua",
    inShort: "masuk",
    outShort: "keluar",
    balance: "Saldo",
    totalIn: "MASUK",
    totalOut: "KELUAR",
    totalBalance: "SALDO",
    today: "Hari ini",
    thisWeek: "Minggu ini",
    thisMonth: "Bulan ini",
    total: "Total",
    transactions: "transaksi",
    recent: "Transaksi Terakhir",
    seeAll: "Lihat semua",
    statistics: "Statistik",
    byCategory: "Kategori",
    daily: "Harian",
    noDataChart: "Belum ada data bulan ini",
    biggestCategory: "Kategori terbesar",
    history: "Riwayat",
    searchHint: "Cari catatan...",
    filter: "Filter",
    filterTitle: "Filter Riwayat",
    monthFilter: "Bulan",
    resetFilter: "Reset",
    done: "Selesai",
    settings: "Pengaturan",
    theme: "Tema",
    themeDesc: "Terang atau gelap",
    light: "Terang",
    dark: "Gelap",
    language: "Bahasa",
    languageDesc: "Indonesia atau English",
    installApp: "Pasang di layar utama",
    shareWA: "Kirim ke WhatsApp",
    shareWAAll: "Kirim semua data ke WhatsApp",
    report: "Laporan",
    dataLabel: "Data",
    pulledLabel: "Ditarik",
    allData: "Semua data",
    details: "Rincian",
    perDay: "Saldo per hari",
    andMore: "lainnya",
    noDataShare: "Tidak ada data untuk dikirim",
    clearData: "Hapus semua data",
    version: "Versi",
    footerMsg: "Data tersimpan di browser boy",
    navHome: "Beranda",
    navStats: "Statistik",
    navHistory: "Riwayat",
    navSettings: "Atur",
    addExpense: "Tambah Pengeluaran",
    editExpense: "Edit Pengeluaran",
    addIncome: "Tambah Pemasukan",
    editIncome: "Edit Pemasukan",
    amount: "Jumlah",
    category: "Kategori",
    note: "Catatan",
    date: "Tanggal",
    save: "Simpan",
    update: "Update",
    delete: "Hapus",
    cancel: "Batal",
    noExpenses: "Belum ada catatan. Yuk mulai catat!",
    noResult: "Tidak ada catatan pada filter ini.",
    noResultDate: "Tidak ada catatan pada tanggal ini.",
    resultOn: "Catatan tanggal",
    allCategories: "Semua",
    filterCategory: "Kategori",
    todayFilter: "Hari Ini",
    confirmDelete: "Hapus catatan?",
    confirmDeleteMsg: "Data yang dihapus tidak bisa dikembalikan.",
    clearDataMsg:
      "Semua catatan pengeluaran dan pemasukan akan dihapus permanen dari browser ini.",
    saved: "Catatan tersimpan!",
    updated: "Catatan diperbarui!",
    deleted: "Catatan dihapus!",
    selectCategory: "Pilih kategori dulu ya",
    noteHint: "Contoh: Makan siang",
    install: "Pasang",
    installBannerTitle: "Pasang sebagai aplikasi",
    installBannerSubtitle: "Buka lebih cepat dari layar utama HP",
    close: "Tutup",
    installTitle: "Pasang Money Management",
    installSubtitle: "Akses cepat dari layar utama HP",
    installHintIos:
      'Di iPhone/iPad: buka aplikasi ini di Safari, ketuk tombol Bagikan (kotak dengan panah ke atas), lalu pilih "Tambah ke Layar Utama".',
    installHintGeneric:
      'Buka menu browser (⋮) di kanan atas, lalu pilih "Instal aplikasi" atau "Tambahkan ke layar utama".',
    installing: "Menginstal aplikasi...",
    installedApp: "Aplikasi berhasil dipasang!",
    gotIt: "Mengerti",
    toggleTheme: "Ganti tema",
    toggleLang: "Ganti bahasa",
    catFood: "Makanan & Minuman",
    catTransport: "Transportasi",
    catShopping: "Belanja",
    catBills: "Tagihan",
    catEntertainment: "Hiburan",
    catHealth: "Kesehatan",
    catEducation: "Pendidikan",
    catOther: "Lainnya",
    catSalary: "Gaji",
    catFreelance: "Freelance",
    catBusiness: "Usaha",
    catInvestment: "Investasi",
    catBonus: "Bonus",
    catGift: "Hadiah",
    catOtherIncome: "Pemasukan Lain",
  },
  en: {
    appName: "Money Management",
    monthSpending: "Spending this month",
    monthBalance: "Balance this month",
    balanceToday: "Balance today",
    balanceWeek: "Balance this week",
    monthIncome: "Income this month",
    monthExpense: "Expense this month",
    income: "Income",
    expense: "Expense",
    type: "Type",
    allTypes: "All",
    inShort: "in",
    outShort: "out",
    balance: "Balance",
    totalIn: "INCOME",
    totalOut: "EXPENSE",
    totalBalance: "BALANCE",
    today: "Today",
    thisWeek: "This week",
    thisMonth: "This month",
    total: "Total",
    transactions: "transactions",
    recent: "Recent Transactions",
    seeAll: "See all",
    statistics: "Statistics",
    byCategory: "Category",
    daily: "Daily",
    noDataChart: "No data this month yet",
    biggestCategory: "Biggest category",
    history: "History",
    searchHint: "Search notes...",
    filter: "Filter",
    filterTitle: "Filter History",
    monthFilter: "Month",
    resetFilter: "Reset",
    done: "Done",
    settings: "Settings",
    theme: "Theme",
    themeDesc: "Light or dark",
    light: "Light",
    dark: "Dark",
    language: "Language",
    languageDesc: "Indonesian or English",
    installApp: "Install to home screen",
    shareWA: "Send to WhatsApp",
    shareWAAll: "Send all data to WhatsApp",
    report: "Report",
    dataLabel: "Data",
    pulledLabel: "Captured",
    allData: "All data",
    details: "Details",
    perDay: "Daily balance",
    andMore: "more",
    noDataShare: "No data to send",
    clearData: "Delete all data",
    version: "Version",
    footerMsg: "Data stored in your browser",
    navHome: "Home",
    navStats: "Stats",
    navHistory: "History",
    navSettings: "Settings",
    addExpense: "Add Expense",
    editExpense: "Edit Expense",
    addIncome: "Add Income",
    editIncome: "Edit Income",
    amount: "Amount",
    category: "Category",
    note: "Note",
    date: "Date",
    save: "Save",
    update: "Update",
    delete: "Delete",
    cancel: "Cancel",
    noExpenses: "No records yet. Start tracking!",
    noResult: "No records match this filter.",
    noResultDate: "No records on this date.",
    resultOn: "Records on",
    allCategories: "All",
    filterCategory: "Category",
    todayFilter: "Today",
    confirmDelete: "Delete record?",
    confirmDeleteMsg: "Deleted data cannot be recovered.",
    clearDataMsg:
      "All income and expense records will be permanently deleted from this browser.",
    saved: "Expense saved!",
    updated: "Expense updated!",
    deleted: "Expense deleted!",
    selectCategory: "Pick a category first",
    noteHint: "e.g. Lunch",
    install: "Install",
    installBannerTitle: "Install as an app",
    installBannerSubtitle: "Open faster from your home screen",
    close: "Close",
    installTitle: "Install Money Management",
    installSubtitle: "Quick access from your home screen",
    installHintIos:
      'On iPhone/iPad: open this app in Safari, tap the Share button (box with an arrow), then choose "Add to Home Screen".',
    installHintGeneric:
      'Open the browser menu (⋮) at the top right, then choose "Install app" or "Add to home screen".',
    installing: "Installing app...",
    installedApp: "App installed successfully!",
    gotIt: "Got it",
    toggleTheme: "Toggle theme",
    toggleLang: "Switch language",
    catFood: "Food & Drinks",
    catTransport: "Transport",
    catShopping: "Shopping",
    catBills: "Bills",
    catEntertainment: "Entertainment",
    catHealth: "Health",
    catEducation: "Education",
    catOther: "Other",
    catSalary: "Salary",
    catFreelance: "Freelance",
    catBusiness: "Business",
    catInvestment: "Investment",
    catBonus: "Bonus",
    catGift: "Gift",
    catOtherIncome: "Other Income",
  },
};

// --- Categories ---
const expenseCategories = {
  food: {
    emoji: "🍔",
    label: "catFood",
    color: "#fb923c",
    soft: "rgba(251,146,60,.14)",
  },
  transport: {
    emoji: "🚗",
    label: "catTransport",
    color: "#60a5fa",
    soft: "rgba(96,165,250,.14)",
  },
  shopping: {
    emoji: "🛍️",
    label: "catShopping",
    color: "#f472b6",
    soft: "rgba(244,114,182,.14)",
  },
  bills: {
    emoji: "💡",
    label: "catBills",
    color: "#facc15",
    soft: "rgba(250,204,21,.16)",
  },
  entertainment: {
    emoji: "🎮",
    label: "catEntertainment",
    color: "#a78bfa",
    soft: "rgba(167,139,250,.16)",
  },
  health: {
    emoji: "💊",
    label: "catHealth",
    color: "#f87171",
    soft: "rgba(248,113,113,.14)",
  },
  education: {
    emoji: "📚",
    label: "catEducation",
    color: "#22d3ee",
    soft: "rgba(34,211,238,.14)",
  },
  other: {
    emoji: "📦",
    label: "catOther",
    color: "#94a3b8",
    soft: "rgba(148,163,184,.16)",
  },
};

const incomeCategories = {
  salary: {
    emoji: "💼",
    label: "catSalary",
    color: "#10b981",
    soft: "rgba(16,185,129,.14)",
  },
  freelance: {
    emoji: "🧑‍💻",
    label: "catFreelance",
    color: "#22d3ee",
    soft: "rgba(34,211,238,.14)",
  },
  business: {
    emoji: "🏪",
    label: "catBusiness",
    color: "#f59e0b",
    soft: "rgba(245,158,11,.16)",
  },
  investment: {
    emoji: "📈",
    label: "catInvestment",
    color: "#8b5cf6",
    soft: "rgba(139,92,246,.16)",
  },
  bonus: {
    emoji: "🏆",
    label: "catBonus",
    color: "#eab308",
    soft: "rgba(234,179,8,.16)",
  },
  gift: {
    emoji: "🎁",
    label: "catGift",
    color: "#ec4899",
    soft: "rgba(236,72,153,.14)",
  },
  otherIncome: {
    emoji: "💰",
    label: "catOtherIncome",
    color: "#94a3b8",
    soft: "rgba(148,163,184,.16)",
  },
};

// Semua kategori digabung untuk lookup label/warna
const categories = { ...expenseCategories, ...incomeCategories };
const categoryList = Object.keys(categories);

function categoriesFor(type) {
  return Object.keys(type === "income" ? incomeCategories : expenseCategories);
}

function categoryType(cat) {
  return incomeCategories[cat] ? "income" : "expense";
}

function entryType(entry) {
  return entry?.type === "income" ? "income" : "expense";
}

// --- State ---
let currentLang = localStorage.getItem("catatduit_lang") || "id";
let currentTheme = localStorage.getItem("catatduit_theme") || "light";
let chartView = "category";
let deleteTargetId = null;
let expenseChart = null;
let sparkChart = null;
let filterCat = "all";
let filterType = "all";
let formType = "expense";
let statType = "expense";

// --- Helpers ---
function getExpenses() {
  try {
    const raw = JSON.parse(localStorage.getItem("catatduit_expenses") || "[]");
    if (!Array.isArray(raw)) return [];
    // Data lama belum punya `type`, anggap pengeluaran
    return raw.map(e => ({ ...e, type: entryType(e) }));
  } catch (e) {
    return [];
  }
}

function saveExpenses(data) {
  localStorage.setItem("catatduit_expenses", JSON.stringify(data));
}

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

function formatCurrency(num) {
  const value = Math.round(Number(num) || 0);
  const sign = value < 0 ? "-" : "";
  return sign + "Rp " + Math.abs(value).toLocaleString("id-ID");
}

function t(key) {
  return translations[currentLang]?.[key] || translations.id[key] || key;
}

function categoryLabel(cat) {
  return t(categories[cat]?.label || "catOther");
}

function categoryMeta(cat) {
  return categories[cat] || categories.other;
}

function trxCount(n) {
  if (currentLang === "id") return `${n} transaksi`;
  return `${n} transaction${n === 1 ? "" : "s"}`;
}

function getToday() {
  const d = new Date();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${month}-${day}`;
}

function getThisMonthStr() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
}

// Parse YYYY-MM-DD as a local date (avoids UTC off-by-one on day labels)
function parseDateStr(dateStr) {
  const [y, m, d] = dateStr.split("-").map(Number);
  return new Date(y, m - 1, d);
}

function formatDayLabel(dateStr) {
  if (!dateStr) return "";
  return parseDateStr(dateStr).toLocaleDateString(
    currentLang === "id" ? "id-ID" : "en-US",
    { weekday: "long", day: "numeric", month: "long", year: "numeric" },
  );
}

function formatMonthLabel(monthStr) {
  if (!monthStr) return "";
  return parseDateStr(`${monthStr}-01`).toLocaleDateString(
    currentLang === "id" ? "id-ID" : "en-US",
    { month: "long", year: "numeric" },
  );
}

function isToday(dateStr) {
  return dateStr === getToday();
}

function isThisWeek(dateStr) {
  const d = parseDateStr(dateStr);
  const now = new Date();
  const start = new Date(now);
  start.setDate(now.getDate() - now.getDay());
  start.setHours(0, 0, 0, 0);
  const end = new Date(start);
  end.setDate(start.getDate() + 7);
  return d >= start && d < end;
}

function isThisMonth(dateStr) {
  const d = parseDateStr(dateStr);
  const now = new Date();
  return (
    d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear()
  );
}

function esc(str) {
  return String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function sum(list) {
  return list.reduce((s, e) => s + (Number(e.amount) || 0), 0);
}

function sumByType(list, type) {
  return sum(list.filter(e => entryType(e) === type));
}

function totalsOf(list) {
  const incomeList = list.filter(e => entryType(e) === "income");
  const expenseList = list.filter(e => entryType(e) === "expense");
  const income = sum(incomeList);
  const expense = sum(expenseList);

  return {
    income,
    expense,
    net: income - expense,
    incomeCount: incomeList.length,
    expenseCount: expenseList.length,
    count: list.length,
  };
}

function flowText(totals) {
  return `${totals.incomeCount} ${t("inShort")} · ${totals.expenseCount} ${t("outShort")}`;
}

// --- Theme ---
function applyTheme() {
  const html = document.documentElement;
  const meta = document.getElementById("themeColorMeta");
  const isDark = currentTheme === "dark";

  html.classList.toggle("dark", isDark);

  if (meta) meta.content = isDark ? "#070e1a" : "#f6f8fd";

  document.getElementById("themeLightBtn")?.classList.toggle("active", !isDark);
  document.getElementById("themeDarkBtn")?.classList.toggle("active", isDark);
  document
    .getElementById("themeBtn")
    ?.setAttribute("aria-pressed", String(isDark));
}

function toggleTheme() {
  setTheme(currentTheme === "dark" ? "light" : "dark");
}

function setTheme(theme) {
  currentTheme = theme === "dark" ? "dark" : "light";
  localStorage.setItem("catatduit_theme", currentTheme);
  applyTheme();
  renderChart();
  renderSpark();
}

// --- Language ---
function applyLang() {
  document.documentElement.lang = currentLang;

  const langBtn = document.getElementById("langBtn");
  if (langBtn) langBtn.textContent = currentLang === "id" ? "ID" : "EN";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[currentLang]?.[key] !== undefined) {
      el.textContent = translations[currentLang][key];
    }
  });

  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    const key = el.getAttribute("data-i18n-ph");
    if (translations[currentLang]?.[key] !== undefined) {
      el.placeholder = translations[currentLang][key];
    }
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria-label");
    if (translations[currentLang]?.[key] !== undefined) {
      el.setAttribute("aria-label", translations[currentLang][key]);
    }
  });

  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    const key = el.getAttribute("data-i18n-title");
    if (translations[currentLang]?.[key] !== undefined) {
      el.title = translations[currentLang][key];
    }
  });

  document
    .getElementById("langIdBtn")
    ?.classList.toggle("active", currentLang === "id");
  document
    .getElementById("langEnBtn")
    ?.classList.toggle("active", currentLang === "en");

  // Dynamic pieces
  const todayLabel = document.getElementById("todayLabel");
  if (todayLabel) {
    const label = formatDayLabel(getToday());
    todayLabel.textContent = label.charAt(0).toUpperCase() + label.slice(1);
  }

  buildCategoryGrid();
  renderCategoryChips();
  syncFormTypeUI();
  syncStatTypeUI();
  updateSheetMode();
  updateFilterUI();
}

function toggleLang() {
  setLang(currentLang === "id" ? "en" : "id");
}

function setLang(lang) {
  currentLang = lang === "en" ? "en" : "id";
  localStorage.setItem("catatduit_lang", currentLang);
  applyLang();
  renderAll();
}

// --- Date/time labels ---
function renderHeader() {
  const todayLabel = document.getElementById("todayLabel");
  if (todayLabel) {
    const label = formatDayLabel(getToday());
    todayLabel.textContent = label.charAt(0).toUpperCase() + label.slice(1);
  }
  const heroMonth = document.getElementById("heroMonth");
  if (heroMonth) heroMonth.textContent = formatMonthLabel(getThisMonthStr());
}

// --- Home ---
function updateStats() {
  const entries = getExpenses();
  const today = entries.filter(e => isToday(e.date));
  const week = entries.filter(e => isThisWeek(e.date));
  const month = entries.filter(e => isThisMonth(e.date));

  const todayTotals = totalsOf(today);
  const weekTotals = totalsOf(week);
  const monthTotals = totalsOf(month);

  document.getElementById("statToday").textContent = formatCurrency(todayTotals.net);
  document.getElementById("statWeek").textContent = formatCurrency(weekTotals.net);
  document.getElementById("statIncome").textContent = formatCurrency(monthTotals.income);
  document.getElementById("statExpense").textContent = formatCurrency(monthTotals.expense);

  document.getElementById("statTodayCount").textContent = flowText(todayTotals);
  document.getElementById("statWeekCount").textContent = flowText(weekTotals);
  document.getElementById("statIncomeCount").textContent = trxCount(monthTotals.incomeCount);
  document.getElementById("statExpenseCount").textContent = trxCount(monthTotals.expenseCount);

  document.getElementById("heroTotal").textContent = formatCurrency(monthTotals.net);
  document.getElementById("heroIncome").textContent = formatCurrency(monthTotals.income);
  document.getElementById("heroExpense").textContent = formatCurrency(monthTotals.expense);
  document.getElementById("heroCount").textContent = trxCount(monthTotals.count);
}

function renderRecent() {
  const container = document.getElementById("recentList");
  if (!container) return;

  const expenses = [...getExpenses()]
    .sort((a, b) => {
      if (a.date !== b.date) return b.date.localeCompare(a.date);
      return (b.createdAt || 0) - (a.createdAt || 0);
    })
    .slice(0, 5);

  if (expenses.length === 0) {
    container.innerHTML = emptyState(t("noExpenses"));
    return;
  }
  container.innerHTML = expenses.map(txItemHtml).join("");
}

function renderSpark() {
  if (document.getElementById("view-home")?.hidden) return;

  const canvas = document.getElementById("sparkChart");
  if (!canvas || typeof Chart === "undefined") return;

  if (sparkChart) {
    sparkChart.destroy();
    sparkChart = null;
  }

  const days = [];
  const now = new Date();
  for (let i = 6; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth(), now.getDate() - i);
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    days.push({
      key,
      letter: d.toLocaleDateString(currentLang === "id" ? "id-ID" : "en-US", {
        weekday: "narrow",
      }),
      total: 0,
    });
  }

  getExpenses().forEach((e) => {
    const hit = days.find((d) => d.key === e.date);
    if (!hit) return;
    const amount = Number(e.amount) || 0;
    hit.total += entryType(e) === "income" ? amount : -amount;
  });

  sparkChart = new Chart(canvas, {
    type: "bar",
    data: {
      labels: days.map((d) => d.letter),
      datasets: [
        {
          data: days.map((d) => d.total),
          backgroundColor: days.map((d, i) => {
            if (d.total < 0) return "rgba(255,145,135,.85)";
            return i === days.length - 1
              ? "rgba(255,255,255,.95)"
              : "rgba(255,255,255,.34)";
          }),
          borderRadius: 5,
          borderSkipped: false,
          barPercentage: 0.62,
          categoryPercentage: 0.8,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      layout: { padding: { top: 4 } },
      scales: {
        x: { display: false, grid: { display: false } },
        y: { display: false, grid: { display: false }, beginAtZero: true },
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          displayColors: false,
          callbacks: {
            title: (items) => formatDayLabel(days[items[0].dataIndex].key),
            label: (ctx) => `${t("balance")}: ${formatCurrency(ctx.parsed.y)}`,
          },
        },
      },
      animation: { duration: 500 },
    },
  });
}

// --- Stats ---
function setChartView(view) {
  chartView = view === "daily" ? "daily" : "category";
  document
    .getElementById("btnChartCat")
    ?.classList.toggle("active", chartView === "category");
  document
    .getElementById("btnChartDaily")
    ?.classList.toggle("active", chartView === "daily");
  renderChart();
}

function syncStatTypeUI() {
  document
    .getElementById("statExpenseBtn")
    ?.classList.toggle("active", statType === "expense");
  document
    .getElementById("statIncomeBtn")
    ?.classList.toggle("active", statType === "income");
}

function setStatType(type) {
  statType = type === "income" ? "income" : "expense";
  syncStatTypeUI();
  renderChart();
}

function renderChart() {
  const viewStats = document.getElementById("view-stats");
  if (!viewStats || viewStats.hidden) return;

  const canvas = document.getElementById("expenseChart");
  if (!canvas) return;

  const monthExpenses = getExpenses().filter(
    e => isThisMonth(e.date) && entryType(e) === statType,
  );
  const emptyMsg = document.getElementById("chartEmpty");
  const legend = document.getElementById("chartLegend");
  const donutCenter = document.getElementById("donutCenter");

  if (expenseChart) {
    expenseChart.destroy();
    expenseChart = null;
  }

  const monthTotal = sum(monthExpenses);
  const donutTotal = document.getElementById("donutTotal");
  if (donutTotal) donutTotal.textContent = formatCurrency(monthTotal);
  const donutLabel = document.getElementById("donutLabel");
  if (donutLabel) donutLabel.textContent = t(statType);

  if (legend) legend.innerHTML = "";

  if (monthExpenses.length === 0) {
    if (emptyMsg) emptyMsg.hidden = false;
    if (donutCenter) donutCenter.style.display = "none";
    renderInsight(monthExpenses);
    return;
  }

  if (emptyMsg) emptyMsg.hidden = true;
  if (donutCenter) donutCenter.style.display = "";

  if (typeof Chart === "undefined") {
    renderInsight(monthExpenses);
    return;
  }

  const isDark = currentTheme === "dark";
  const textColor = isDark ? "#8fa1bb" : "#8894a9";
  const gridColor = isDark ? "rgba(143,161,187,.14)" : "rgba(136,148,169,.16)";
  const brand = isDark ? "#5b8cff" : "#2f6bff";

  if (chartView === "category") {
    const totals = {};
    monthExpenses.forEach((e) => {
      totals[e.category] = (totals[e.category] || 0) + (Number(e.amount) || 0);
    });

    const entries = Object.entries(totals).sort((a, b) => b[1] - a[1]);

    expenseChart = new Chart(canvas, {
      type: "doughnut",
      data: {
        labels: entries.map(([cat]) => categoryLabel(cat)),
        datasets: [
          {
            data: entries.map(([, val]) => val),
            backgroundColor: entries.map(([cat]) => categoryMeta(cat).color),
            borderWidth: 0,
            hoverOffset: 6,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "72%",
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx) => ` ${ctx.label}: ${formatCurrency(ctx.parsed)}`,
            },
          },
        },
        animation: { animateRotate: true, duration: 700 },
      },
    });

    if (legend) {
      legend.innerHTML = entries
        .map(([cat, val]) => {
          const meta = categoryMeta(cat);
          return `
          <div class="legend-item">
            <span class="legend-dot" style="background:${meta.color}"></span>
            <span class="legend-name">${esc(categoryLabel(cat))}</span>
            <span class="legend-val">${formatCurrency(val)}</span>
          </div>`;
        })
        .join("");
    }
  } else {
    const dailyTotals = {};
    monthExpenses.forEach((e) => {
      dailyTotals[e.date] =
        (dailyTotals[e.date] || 0) + (Number(e.amount) || 0);
    });
    const dates = Object.keys(dailyTotals).sort();

    expenseChart = new Chart(canvas, {
      type: "bar",
      data: {
        labels: dates.map((d) => parseDateStr(d).getDate()),
        datasets: [
          {
            label: t("daily"),
            data: dates.map((d) => dailyTotals[d]),
            backgroundColor: isDark
              ? "rgba(91,140,255,.55)"
              : "rgba(47,107,255,.45)",
            borderColor: brand,
            borderWidth: 1,
            borderRadius: 6,
            borderSkipped: false,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: { display: false },
            ticks: { color: textColor, font: { size: 10 } },
          },
          y: {
            grid: { color: gridColor },
            ticks: {
              color: textColor,
              font: { size: 10 },
              callback: (v) => formatCurrency(v),
            },
            beginAtZero: true,
          },
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: { label: (ctx) => ` ${formatCurrency(ctx.parsed.y)}` },
          },
        },
        animation: { duration: 500 },
      },
    });

    if (legend) {
      legend.innerHTML = `
        <div class="legend-item">
          <span class="legend-dot" style="background:${brand}"></span>
          <span class="legend-name">${esc(t("daily"))}</span>
          <span class="legend-val">${formatCurrency(monthTotal)}</span>
        </div>`;
    }
  }

  renderInsight(monthExpenses);
}

function renderInsight(monthExpenses) {
  const nameEl = document.getElementById("insightName");
  const subEl = document.getElementById("insightSub");
  const valEl = document.getElementById("insightValue");
  const icoEl = document.getElementById("insightIco");
  if (!nameEl || !subEl || !valEl || !icoEl) return;

  if (monthExpenses.length === 0) {
    icoEl.textContent = "🏷️";
    icoEl.style.background = "var(--brand-soft)";
    nameEl.textContent = "—";
    subEl.textContent = "—";
    valEl.textContent = formatCurrency(0);
    return;
  }

  const totals = {};
  monthExpenses.forEach((e) => {
    totals[e.category] = (totals[e.category] || 0) + (Number(e.amount) || 0);
  });

  const [topCat, topVal] = Object.entries(totals).sort(
    (a, b) => b[1] - a[1],
  )[0];
  const meta = categoryMeta(topCat);
  const total = sum(monthExpenses);
  const pct = total > 0 ? Math.round((topVal / total) * 100) : 0;

  icoEl.textContent = meta.emoji;
  icoEl.style.background = meta.soft;
  nameEl.textContent = categoryLabel(topCat);
  subEl.textContent = `${pct}% ${currentLang === "id" ? "dari total bulan ini" : "of this month total"}`;
  valEl.textContent = formatCurrency(topVal);
}

// --- Filters ---
function onDateFilterChange() {
  const dateEl = document.getElementById("filterDate");
  if (dateEl.value) document.getElementById("filterMonth").value = "";
  updateFilterUI();
  renderTransactions();
}

function onMonthFilterChange() {
  const monthEl = document.getElementById("filterMonth");
  if (monthEl.value) document.getElementById("filterDate").value = "";
  updateFilterUI();
  renderTransactions();
}

function setDateFilter(dateStr) {
  document.getElementById("filterDate").value = dateStr;
  document.getElementById("filterMonth").value = "";
  updateFilterUI();
  renderTransactions();
}

function setMonthFilter(monthStr) {
  document.getElementById("filterMonth").value = monthStr;
  document.getElementById("filterDate").value = "";
  updateFilterUI();
  renderTransactions();
}

function clearDateFilter() {
  document.getElementById("filterDate").value = "";
  updateFilterUI();
  renderTransactions();
}

function clearMonthFilter() {
  document.getElementById("filterMonth").value = "";
  updateFilterUI();
  renderTransactions();
}

function setCategoryFilter(cat) {
  filterCat = categories[cat] ? cat : "all";

  // Kalau kategori yang dipilih beda jenis dengan filter aktif, ikuti jenisnya
  if (filterCat !== "all" && filterType !== "all" && categoryType(filterCat) !== filterType) {
    filterType = categoryType(filterCat);
  }

  updateFilterUI();
  renderTransactions();
}

function setFilterType(type) {
  filterType = type === "income" || type === "expense" ? type : "all";

  if (filterCat !== "all" && filterType !== "all" && categoryType(filterCat) !== filterType) {
    filterCat = "all";
  }

  updateFilterUI();
  renderTransactions();
}

function resetFilters() {
  filterCat = "all";
  filterType = "all";
  document.getElementById("filterDate").value = "";
  document.getElementById("filterMonth").value = "";
  const search = document.getElementById("searchInput");
  if (search) search.value = "";
  updateFilterUI();
  renderTransactions();
}

function currentFilters() {
  return {
    date: document.getElementById("filterDate")?.value || "",
    month: document.getElementById("filterMonth")?.value || "",
    cat: filterCat,
    type: filterType,
    search: (document.getElementById("searchInput")?.value || "").trim(),
  };
}

function hasActiveFilter(f) {
  return !!(
    f.date ||
    f.month ||
    (f.cat && f.cat !== "all") ||
    (f.type && f.type !== "all") ||
    f.search
  );
}

function updateFilterUI() {
  const f = currentFilters();
  const dateEl = document.getElementById("filterDate");
  const monthField = document.getElementById("filterMonth")?.closest(".field");
  const clearBtn = document.getElementById("clearDateBtn");
  const todayBtn = document.getElementById("todayFilterBtn");
  const dot = document.getElementById("filterDot");
  const filterBtn = document.getElementById("filterBtn");

  // Date and month filters are mutually exclusive; hide month while date is active
  if (monthField) monthField.style.display = f.date ? "none" : "";
  if (dateEl) dateEl.value = f.date;

  if (clearBtn) clearBtn.hidden = !f.date;
  if (todayBtn)
    todayBtn.classList.toggle("active", !!f.date && f.date === getToday());

  document
    .getElementById("filterTypeAllBtn")
    ?.classList.toggle("active", f.type === "all");
  document
    .getElementById("filterTypeExpenseBtn")
    ?.classList.toggle("active", f.type === "expense");
  document
    .getElementById("filterTypeIncomeBtn")
    ?.classList.toggle("active", f.type === "income");

  const active = hasActiveFilter(f);
  if (dot) dot.hidden = !active;
  if (filterBtn)
    filterBtn.classList.toggle("active", !!(f.date || f.month || f.type !== "all"));

  renderCategoryChips();
  renderActiveFilters(f);
}

function renderCategoryChips() {
  const row = document.getElementById("categoryChips");
  if (!row) return;

  const chips = [
    `<button class="chip ${filterCat === "all" ? "active" : ""}" onclick="setCategoryFilter('all')">${esc(t("allCategories"))}</button>`,
  ];

  const list = filterType === "all" ? categoryList : categoriesFor(filterType);

  list.forEach((cat) => {
    const meta = categoryMeta(cat);
    chips.push(
      `<button class="chip ${filterCat === cat ? "active" : ""}" onclick="setCategoryFilter('${cat}')">
        <span>${meta.emoji}</span>${esc(categoryLabel(cat))}
      </button>`,
    );
  });

  row.innerHTML = chips.join("");
}

function renderActiveFilters(f) {
  const box = document.getElementById("activeFilters");
  if (!box) return;

  const parts = [];

  if (f.type && f.type !== "all") {
    parts.push(`<button class="active-chip" onclick="setFilterType('all')">
      ${f.type === "income" ? "💰" : "💸"} ${esc(t(f.type))}
      ${closeIcon()}
    </button>`);
  }
  if (f.date) {
    parts.push(`<button class="active-chip" onclick="clearDateFilter()">
      📅 ${esc(formatDayLabel(f.date))}
      ${closeIcon()}
    </button>`);
  }
  if (f.month) {
    parts.push(`<button class="active-chip" onclick="clearMonthFilter()">
      🗓️ ${esc(formatMonthLabel(f.month))}
      ${closeIcon()}
    </button>`);
  }
  if (f.cat && f.cat !== "all") {
    const meta = categoryMeta(f.cat);
    parts.push(`<button class="active-chip" onclick="setCategoryFilter('all')">
      ${meta.emoji} ${esc(categoryLabel(f.cat))}
      ${closeIcon()}
    </button>`);
  }

  box.innerHTML = parts.join("");
}

function closeIcon() {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>`;
}

// --- Sheets ---
function openSheet(sheetId, backdropId) {
  document.getElementById(backdropId)?.classList.add("open");
  document.getElementById(sheetId)?.classList.add("open");
  document.body.classList.add("no-scroll");
}

function closeSheet(sheetId, backdropId) {
  document.getElementById(backdropId)?.classList.remove("open");
  document.getElementById(sheetId)?.classList.remove("open");
  document.body.classList.remove("no-scroll");
}

function openExpenseSheet(id) {
  const form = document.getElementById("expenseForm");
  form?.reset();
  document.getElementById("editId").value = "";
  document.getElementById("inputCategory").value = "";
  document.getElementById("inputDate").value = getToday();
  document.getElementById("btnDelete").hidden = true;
  formType = "expense";
  syncFormTypeUI();
  buildCategoryGrid();

  if (id) editExpense(id);

  updateSheetMode();
  openSheet("expenseSheet", "sheetBackdrop");
  setTimeout(() => document.getElementById("inputAmount")?.focus(), 320);
}

function closeExpenseSheet() {
  closeSheet("expenseSheet", "sheetBackdrop");
  document.getElementById("inputAmount")?.blur();
}

function openFilterSheet() {
  updateFilterUI();
  openSheet("filterSheet", "filterBackdrop");
}

function closeFilterSheet() {
  closeSheet("filterSheet", "filterBackdrop");
}

// --- Transactions list ---
function filteredExpenses() {
  const f = currentFilters();
  let list = getExpenses();

  if (f.search) {
    const term = f.search.toLowerCase();
    list = list.filter(
      (e) =>
        String(e.note || "")
          .toLowerCase()
          .includes(term) ||
        categoryLabel(e.category).toLowerCase().includes(term),
    );
  }

  if (f.cat && f.cat !== "all") list = list.filter((e) => e.category === f.cat);
  if (f.type && f.type !== "all")
    list = list.filter((e) => entryType(e) === f.type);
  if (f.month) list = list.filter((e) => String(e.date).startsWith(f.month));
  if (f.date) list = list.filter((e) => e.date === f.date);

  return list.sort((a, b) => {
    if (a.date !== b.date) return b.date.localeCompare(a.date);
    return (b.createdAt || 0) - (a.createdAt || 0);
  });
}

function txItemHtml(e) {
  const meta = categoryMeta(e.category);
  const type = entryType(e);
  const isIncome = type === "income";
  const note = e.note ? esc(e.note) : esc(categoryLabel(e.category));
  const amount = esc(formatCurrency(e.amount));
  return `
    <button class="tx-item" onclick="openExpenseSheet('${esc(e.id)}')" aria-label="${esc(note)} ${isIncome ? "+" : "-"}${amount}">
      <span class="tx-ico" style="background:${meta.soft}">${meta.emoji}</span>
      <span class="tx-main">
        <span class="tx-title">${note}</span>
        <span class="tx-sub">${esc(categoryLabel(e.category))} · ${esc(t(type))}</span>
      </span>
      <span class="tx-amount ${isIncome ? "income" : ""}">${isIncome ? "+" : "-"}${amount}</span>
    </button>`;
}

function emptyState(message) {
  return `
    <div class="empty">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
      </svg>
      <p>${esc(message)}</p>
    </div>`;
}

function renderTransactions() {
  const container = document.getElementById("transactionList");
  if (!container) return;

  const f = currentFilters();
  const list = filteredExpenses();

  // Header count
  const countEl = document.getElementById("historyCount");
  if (countEl) countEl.textContent = trxCount(list.length);

  // Summary bar (date / month / category / search)
  const summary = document.getElementById("filterSummary");
  const summaryText = document.getElementById("filterSummaryText");
  const summaryTotal = document.getElementById("filterSummaryTotal");

  if (summary && summaryText && summaryTotal) {
    if (f.date) {
      summary.hidden = false;
      summaryText.innerHTML = `<b>${esc(t("resultOn"))}</b> ${esc(formatDayLabel(f.date))} · ${trxCount(list.length)}`;
      summaryTotal.textContent = formatCurrency(totalsOf(list).net);
    } else if (f.month) {
      summary.hidden = false;
      summaryText.innerHTML = `<b>${esc(t("monthFilter"))}</b> ${esc(formatMonthLabel(f.month))} · ${trxCount(list.length)}`;
      summaryTotal.textContent = formatCurrency(totalsOf(list).net);
    } else if (f.cat !== "all") {
      summary.hidden = false;
      summaryText.innerHTML = `<b>${esc(t("filterCategory"))}</b> ${esc(categoryLabel(f.cat))} · ${trxCount(list.length)}`;
      summaryTotal.textContent = formatCurrency(totalsOf(list).net);
    } else if (f.type !== "all") {
      summary.hidden = false;
      summaryText.innerHTML = `<b>${esc(t("type"))}</b> ${esc(t(f.type))} · ${trxCount(list.length)}`;
      summaryTotal.textContent = formatCurrency(totalsOf(list).net);
    } else if (f.search) {
      summary.hidden = false;
      summaryText.innerHTML = `<b>${esc(trxCount(list.length))}</b>`;
      summaryTotal.textContent = formatCurrency(totalsOf(list).net);
    } else {
      summary.hidden = true;
    }
  }

  if (list.length === 0) {
    let message = t("noExpenses");
    if (f.date) message = t("noResultDate");
    else if (hasActiveFilter(f)) message = t("noResult");
    container.innerHTML = emptyState(message);
    return;
  }

  const grouped = {};
  list.forEach((e) => {
    if (!grouped[e.date]) grouped[e.date] = [];
    grouped[e.date].push(e);
  });

  container.innerHTML = Object.keys(grouped)
    .sort((a, b) => b.localeCompare(a))
    .map((date) => {
      const items = grouped[date];
      return `
        <div class="tx-day">
          <div class="tx-day-head">
            <span>${esc(formatDayLabel(date))}</span>
            <span class="tx-day-total">${esc(formatCurrency(totalsOf(items).net))}</span>
          </div>
          <div class="tx-list">${items.map(txItemHtml).join("")}</div>
        </div>`;
    })
    .join("");
}

// --- Category grid (add/edit sheet) ---
function buildCategoryGrid() {
  const grid = document.getElementById("catGrid");
  if (!grid) return;

  grid.innerHTML = categoriesFor(formType)
    .map((cat) => {
      const meta = categoryMeta(cat);
      return `
      <button type="button" class="cat-option" data-cat="${cat}" onclick="pickCategory('${cat}')">
        <span class="emoji">${meta.emoji}</span>
        <span>${esc(categoryLabel(cat))}</span>
      </button>`;
    })
    .join("");

  const selected = document.getElementById("inputCategory")?.value;
  if (selected) markCategory(selected);
}

function pickCategory(cat) {
  document.getElementById("inputCategory").value = cat;
  markCategory(cat);
}

function markCategory(cat) {
  document.querySelectorAll("#catGrid .cat-option").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.cat === cat);
  });
}

function setFormType(type) {
  formType = type === "income" ? "income" : "expense";

  // Kategori lama tidak selalu ada di jenis baru
  const current = document.getElementById("inputCategory")?.value;
  if (current && categoryType(current) !== formType) {
    document.getElementById("inputCategory").value = "";
  }

  syncFormTypeUI();
  buildCategoryGrid();
  updateSheetMode();
}

function syncFormTypeUI() {
  const isIncome = formType === "income";

  document
    .getElementById("typeExpenseBtn")
    ?.classList.toggle("active", !isIncome);
  document
    .getElementById("typeIncomeBtn")
    ?.classList.toggle("active", isIncome);
  document.getElementById("amountBox")?.classList.toggle("income", isIncome);
}

function updateSheetMode() {
  const id = document.getElementById("editId")?.value || "";
  const title = document.getElementById("sheetTitle");
  const submit = document.querySelector("#btnSubmit span");
  const del = document.getElementById("btnDelete");
  const isIncome = formType === "income";

  if (title) {
    title.textContent = id
      ? t(isIncome ? "editIncome" : "editExpense")
      : t(isIncome ? "addIncome" : "addExpense");
  }
  if (submit) submit.textContent = id ? t("update") : t("save");
  if (del) del.hidden = !id;
}

// --- Amount input ---
function onAmountInput(event) {
  const digits = event.target.value.replace(/\D/g, "").slice(0, 12);
  event.target.value = digits ? Number(digits).toLocaleString("id-ID") : "";
}

function amountValue() {
  return (
    parseInt(
      document.getElementById("inputAmount").value.replace(/\D/g, ""),
      10,
    ) || 0
  );
}

function setAmount(value) {
  const input = document.getElementById("inputAmount");
  input.value = Number(value).toLocaleString("id-ID");
}

// --- CRUD ---
function handleSubmit(e) {
  e.preventDefault();

  const amount = amountValue();
  const category = document.getElementById("inputCategory").value;
  const note = document.getElementById("inputNote").value.trim();
  const date = document.getElementById("inputDate").value;
  const editId = document.getElementById("editId").value;

  if (!amount) {
    showToast(
      currentLang === "id" ? "Jumlah belum diisi" : "Amount is required",
    );
    return;
  }
  if (!categories[category] || categoryType(category) !== formType) {
    showToast(t("selectCategory"));
    return;
  }
  if (!date) return;

  const expenses = getExpenses();

  if (editId) {
    const idx = expenses.findIndex((ex) => ex.id === editId);
    if (idx !== -1) {
      expenses[idx] = {
        ...expenses[idx],
        amount,
        category,
        note,
        date,
        type: formType,
      };
    }
    showToast(t("updated"));
  } else {
    expenses.push({
      id: generateId(),
      amount,
      category,
      note,
      date,
      type: formType,
      createdAt: Date.now(),
    });
    showToast(t("saved"));
  }

  saveExpenses(expenses);

  // Keep the saved entry reachable: align active filters to its date
  const dateEl = document.getElementById("filterDate");
  const monthEl = document.getElementById("filterMonth");
  if (dateEl.value) {
    dateEl.value = date;
    monthEl.value = "";
  } else if (monthEl.value && !date.startsWith(monthEl.value)) {
    monthEl.value = date.slice(0, 7);
  }

  closeExpenseSheet();
  renderAll();
}

function editExpense(id) {
  const expense = getExpenses().find((e) => e.id === id);
  if (!expense) return;

  formType = entryType(expense);

  document.getElementById("inputAmount").value = Number(
    expense.amount,
  ).toLocaleString("id-ID");
  document.getElementById("inputCategory").value = expense.category;
  document.getElementById("inputNote").value = expense.note || "";
  document.getElementById("inputDate").value = expense.date;
  document.getElementById("editId").value = expense.id;

  syncFormTypeUI();
  buildCategoryGrid();
  markCategory(expense.category);
  updateSheetMode();
}

function deleteEditing() {
  const id = document.getElementById("editId").value;
  if (!id) return;
  closeExpenseSheet();
  openDeleteModal(id);
}

function openDeleteModal(id) {
  deleteTargetId = id;
  openModal("deleteModal");
}

function closeDeleteModal() {
  deleteTargetId = null;
  closeModal("deleteModal");
}

function confirmDelete() {
  if (!deleteTargetId) return;

  saveExpenses(getExpenses().filter((e) => e.id !== deleteTargetId));
  closeDeleteModal();
  showToast(t("deleted"));
  renderAll();
}

function openClearModal() {
  openModal("clearModal");
}
function closeClearModal() {
  closeModal("clearModal");
}

function confirmClearData() {
  localStorage.removeItem("catatduit_expenses");
  closeClearModal();
  showToast(t("deleted"));
  resetFilters();
  renderAll();
}

function openModal(id) {
  document.getElementById(id)?.classList.add("open");
  document.body.classList.add("no-scroll");
}

function closeModal(id) {
  document.getElementById(id)?.classList.remove("open");
  document.body.classList.remove("no-scroll");
}

// --- Share to WhatsApp ---
// scope: 'filtered' = ikut filter aktif di Riwayat, 'all' = seluruh data
function sharePeriodLabel(f) {
  if (f.date) return formatDayLabel(f.date);
  if (f.month) return formatMonthLabel(f.month);
  if (f.cat && f.cat !== "all") return categoryLabel(f.cat);
  if (f.type && f.type !== "all") return t(f.type);
  if (f.search) return `"${f.search}"`;
  return t("allData");
}

function buildShareMessage(list, label, singleDate, withDetails) {
  const locale = currentLang === "id" ? "id-ID" : "en-US";
  const pulledAt = new Date().toLocaleString(locale, {
    dateStyle: "long",
    timeStyle: "short",
  });
  const totals = totalsOf(list);

  let msg = `💰 *${t("appName")} — ${t("report")}*\n\n`;
  msg += `📅 ${t("dataLabel")}: ${label}\n`;
  msg += `🕐 ${t("pulledLabel")}: ${pulledAt}\n`;

  const sections = [
    { type: "income", key: "totalIn", emoji: "💵" },
    { type: "expense", key: "totalOut", emoji: "💸" },
  ];

  sections.forEach((section) => {
    const items = list.filter((e) => entryType(e) === section.type);
    if (items.length === 0) return;

    msg += `\n${section.emoji} *${t(section.key)}*: ${formatCurrency(sum(items))}\n`;

    const byCat = {};
    items.forEach((e) => {
      byCat[e.category] = (byCat[e.category] || 0) + (Number(e.amount) || 0);
    });

    Object.entries(byCat)
      .sort((a, b) => b[1] - a[1])
      .forEach(([cat, total]) => {
        msg += `${categoryMeta(cat).emoji} ${categoryLabel(cat)}: ${formatCurrency(total)}\n`;
      });
  });

  msg += `\n━━━━━━━━━━━━━━━━━━\n`;
  msg += `*${t("totalIn")}: ${formatCurrency(totals.income)}*\n`;
  msg += `*${t("totalOut")}: ${formatCurrency(totals.expense)}*\n`;
  msg += `*${t("totalBalance")}: ${formatCurrency(totals.net)}*\n`;
  msg += `📊 ${flowText(totals)}\n`;

  if (withDetails) {
    msg += `\n`;

    if (singleDate) {
      const MAX = 25;
      msg += `📋 ${t("details")}:\n`;
      list.slice(0, MAX).forEach((e) => {
        const sign = entryType(e) === "income" ? "+" : "-";
        msg += `• ${e.note || categoryLabel(e.category)} — ${sign}${formatCurrency(e.amount)}\n`;
      });
      if (list.length > MAX)
        msg += `• … +${list.length - MAX} ${t("andMore")}\n`;
    } else {
      const byDay = {};
      list.forEach((e) => {
        const amount = Number(e.amount) || 0;
        byDay[e.date] =
          (byDay[e.date] || 0) +
          (entryType(e) === "income" ? amount : -amount);
      });

      const days = Object.keys(byDay).sort((a, b) => b.localeCompare(a));
      const MAX = 14;
      msg += `📋 ${t("perDay")}:\n`;
      days.slice(0, MAX).forEach((d) => {
        const dt = parseDateStr(d);
        msg += `• ${dt.getDate()}/${dt.getMonth() + 1} — ${formatCurrency(byDay[d])}\n`;
      });
      if (days.length > MAX)
        msg += `• … +${days.length - MAX} ${t("andMore")}\n`;
    }
  }

  msg += `\n_${currentLang === "id" ? "Dikirim dari" : "Sent from"} ${t("appName")} 📱`;
  return msg;
}

function shareToWA(scope = "all") {
  const f = currentFilters();
  let list;
  let label;
  let singleDate = false;

  if (scope === "filtered") {
    list = filteredExpenses();
    label = sharePeriodLabel(f);
    singleDate = !!f.date;
  } else {
    list = [...getExpenses()].sort((a, b) => {
      if (a.date !== b.date) return b.date.localeCompare(a.date);
      return (b.createdAt || 0) - (a.createdAt || 0);
    });
    label = t("allData");
  }

  if (list.length === 0) {
    showToast(t("noDataShare"));
    return;
  }

  let msg = buildShareMessage(list, label, singleDate, true);

  // Jaga URL wa.me tetap pendek; buang rincian kalau kepanjangan
  if (msg.length > 1250) {
    msg = buildShareMessage(list, label, singleDate, false);
  }
  if (msg.length > 1250) {
    const pulledAt = new Date().toLocaleString(
      currentLang === "id" ? "id-ID" : "en-US",
      {
        dateStyle: "long",
        timeStyle: "short",
      },
    );
    const totals = totalsOf(list);
    msg = `💰 *${t("appName")} — ${t("report")}*\n📅 ${t("dataLabel")}: ${label}\n🕐 ${t("pulledLabel")}: ${pulledAt}\n\n*${t("totalIn")}: ${formatCurrency(totals.income)}*\n*${t("totalOut")}: ${formatCurrency(totals.expense)}*\n*${t("totalBalance")}: ${formatCurrency(totals.net)}*\n📊 ${flowText(totals)}`;
  }

  window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, "_blank");
}

// --- Tabs ---
function switchTab(tab) {
  const views = ["home", "stats", "history", "settings"];
  const target = views.includes(tab) ? tab : "home";

  views.forEach((name) => {
    const view = document.getElementById("view-" + name);
    if (view) view.hidden = name !== target;
  });

  document.querySelectorAll(".nav-item[data-tab]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.tab === target);
  });

  window.scrollTo({ top: 0, behavior: "smooth" });

  if (target === "home") {
    renderSpark();
  } else if (target === "stats") {
    renderChart();
  } else if (target === "history") {
    renderTransactions();
  }
}

// --- PWA ---
let deferredInstallPrompt = null;

function isIOS() {
  return (
    /iphone|ipad|ipod/i.test(navigator.userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
  );
}

function isStandalone() {
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true
  );
}

function updateInstallButton() {
  const banner = document.getElementById("installBanner");
  if (!banner) return;
  const dismissed =
    sessionStorage.getItem("catatduit_install_dismissed") === "1";
  const show =
    !isStandalone() && !dismissed && (!!deferredInstallPrompt || isIOS());
  banner.hidden = !show;
}

function dismissInstallBanner() {
  sessionStorage.setItem("catatduit_install_dismissed", "1");
  updateInstallButton();
}

function promptInstall() {
  if (deferredInstallPrompt) {
    deferredInstallPrompt.prompt();
    deferredInstallPrompt.userChoice
      .then((choice) => {
        if (choice.outcome === "accepted") showToast(t("installing"));
        deferredInstallPrompt = null;
        updateInstallButton();
      })
      .catch(() => {});
    return;
  }

  const hint = document.getElementById("installHint");
  if (hint)
    hint.textContent = isIOS() ? t("installHintIos") : t("installHintGeneric");
  openModal("installModal");
}

function closeInstallModal() {
  closeModal("installModal");
}

function setupPWA() {
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredInstallPrompt = e;
    updateInstallButton();
  });

  window.addEventListener("appinstalled", () => {
    deferredInstallPrompt = null;
    updateInstallButton();
    closeInstallModal();
    showToast(t("installedApp"));
  });

  updateInstallButton();

  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("sw.js").catch(() => {});
    });
  }
}

// --- Toast ---
let toastTimer = null;

function showToast(message) {
  const toast = document.getElementById("toast");
  const text = document.getElementById("toastMessage");
  if (!toast || !text) return;

  text.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

// --- Render all ---
function renderAll() {
  renderHeader();
  updateStats();
  renderRecent();
  renderSpark();
  updateFilterUI();
  renderTransactions();
  renderChart();
}

// --- Init ---
function init() {
  document.getElementById("inputDate").value = getToday();

  applyTheme();
  buildCategoryGrid();
  applyLang();

  setupPWA();
  switchTab("home");
  renderAll();
}

document.addEventListener("DOMContentLoaded", init);
