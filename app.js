// ============================================================
// CatatDuit - Expense Tracker App
// Stack: HTML + Tailwind CSS v4 + Vanilla JS + Chart.js
// Storage: LocalStorage
// ============================================================

// --- i18n ---
const translations = {
  id: {
    today: 'Hari Ini',
    thisWeek: 'Minggu Ini',
    thisMonth: 'Bulan Ini',
    total: 'Total',
    transactions: 'transaksi',
    addExpense: 'Tambah Pengeluaran',
    amount: 'Jumlah',
    category: 'Kategori',
    note: 'Catatan',
    date: 'Tanggal',
    save: '💾 Simpan',
    update: '✏️ Update',
    expenseChart: 'Grafik Pengeluaran',
    byCategory: 'Kategori',
    daily: 'Harian',
    noDataChart: 'Belum ada data untuk ditampilkan',
    expenseList: 'Daftar Pengeluaran',
    searchHint: 'Cari catatan...',
    filterCategory: 'Filter kategori',
    filterMonth: 'Filter bulan',
    toggleTheme: 'Ganti tema',
    searchDateHint: 'Cari berdasarkan tanggal',
    resetDateFilter: 'Reset filter tanggal',
    todayShort: 'Hari Ini',
    allCategories: 'Semua Kategori',
    shareWA: 'Share WA',
    noExpenses: 'Belum ada pengeluaran. Yuk mulai catat!',
    noResult: 'Tidak ada pengeluaran pada filter ini.',
    noResultDate: 'Tidak ada pengeluaran pada tanggal ini.',
    resultOn: 'Pengeluaran tanggal',
    confirmDelete: 'Hapus Pengeluaran?',
    confirmDeleteMsg: 'Data yang dihapus tidak bisa dikembalikan.',
    cancel: 'Batal',
    delete: 'Hapus',
    footerMsg: 'Data tersimpan di browser kamu',
    selectCategory: '-- Pilih Kategori --',
    noteHint: 'Contoh: Makan siang di warteg',
    saved: '✅ Pengeluaran tersimpan!',
    updated: '✅ Pengeluaran diperbarui!',
    deleted: '🗑️ Pengeluaran dihapus!',
    install: 'Pasang',
    installBannerTitle: 'Pasang sebagai aplikasi',
    installBannerSubtitle: 'Buka lebih cepat dari layar utama HP',
    close: 'Tutup',
    installTitle: 'Pasang Catat Duit',
    installSubtitle: 'Akses cepat dari layar utama HP',
    installHintIos: 'Di iPhone/iPad: buka aplikasi ini di Safari, ketuk tombol Bagikan (kotak dengan panah ke atas), lalu pilih "Tambah ke Layar Utama".',
    installHintGeneric: 'Buka menu browser (⋮) di kanan atas, lalu pilih "Instal aplikasi" atau "Tambahkan ke layar utama".',
    installing: '📲 Menginstal aplikasi...',
    installedApp: '🎉 Aplikasi berhasil dipasang!',
    gotIt: 'Mengerti',
    // categories
    catFood: '🍔 Makanan & Minuman',
    catTransport: '🚗 Transportasi',
    catShopping: '🛍️ Belanja',
    catBills: '💡 Tagihan & Utilitas',
    catEntertainment: '🎮 Hiburan',
    catHealth: '💊 Kesehatan',
    catEducation: '📚 Pendidikan',
    catOther: '📦 Lainnya',
  },
  en: {
    today: 'Today',
    thisWeek: 'This Week',
    thisMonth: 'This Month',
    total: 'Total',
    transactions: 'transactions',
    addExpense: 'Add Expense',
    amount: 'Amount',
    category: 'Category',
    note: 'Note',
    date: 'Date',
    save: '💾 Save',
    update: '✏️ Update',
    expenseChart: 'Expense Chart',
    byCategory: 'Category',
    daily: 'Daily',
    noDataChart: 'No data to display yet',
    expenseList: 'Expense List',
    searchHint: 'Search notes...',
    filterCategory: 'Filter category',
    filterMonth: 'Filter month',
    toggleTheme: 'Toggle theme',
    searchDateHint: 'Search by date',
    resetDateFilter: 'Reset date filter',
    todayShort: 'Today',
    allCategories: 'All Categories',
    shareWA: 'Share WA',
    noExpenses: 'No expenses yet. Start tracking!',
    noResult: 'No expenses match this filter.',
    noResultDate: 'No expenses on this date.',
    resultOn: 'Expenses on',
    confirmDelete: 'Delete Expense?',
    confirmDeleteMsg: 'Deleted data cannot be recovered.',
    cancel: 'Cancel',
    delete: 'Delete',
    footerMsg: 'Data stored in your browser',
    selectCategory: '-- Select Category --',
    noteHint: 'e.g., Lunch at restaurant',
    saved: '✅ Expense saved!',
    updated: '✅ Expense updated!',
    deleted: '🗑️ Expense deleted!',
    install: 'Install',
    installBannerTitle: 'Install as an app',
    installBannerSubtitle: 'Open faster from your home screen',
    close: 'Close',
    installTitle: 'Install Catat Duit',
    installSubtitle: 'Quick access from your home screen',
    installHintIos: 'On iPhone/iPad: open this app in Safari, tap the Share button (box with an arrow), then choose "Add to Home Screen".',
    installHintGeneric: 'Open the browser menu (⋮) at the top right, then choose "Install app" or "Add to Home screen".',
    installing: '📲 Installing app...',
    installedApp: '🎉 App installed successfully!',
    gotIt: 'Got it',
    catFood: '🍔 Food & Drinks',
    catTransport: '🚗 Transport',
    catShopping: '🛍️ Shopping',
    catBills: '💡 Bills & Utilities',
    catEntertainment: '🎮 Entertainment',
    catHealth: '💊 Health',
    catEducation: '📚 Education',
    catOther: '📦 Other',
  }
};

const categoryKeys = {
  food: 'catFood',
  transport: 'catTransport',
  shopping: 'catShopping',
  bills: 'catBills',
  entertainment: 'catEntertainment',
  health: 'catHealth',
  education: 'catEducation',
  other: 'catOther',
};

const categoryColors = {
  food: { bg: 'bg-orange-500/20', text: 'text-orange-400', chart: '#fb923c' },
  transport: { bg: 'bg-blue-500/20', text: 'text-blue-400', chart: '#60a5fa' },
  shopping: { bg: 'bg-pink-500/20', text: 'text-pink-400', chart: '#f472b6' },
  bills: { bg: 'bg-yellow-500/20', text: 'text-yellow-400', chart: '#facc15' },
  entertainment: { bg: 'bg-purple-500/20', text: 'text-purple-400', chart: '#a78bfa' },
  health: { bg: 'bg-red-500/20', text: 'text-red-400', chart: '#f87171' },
  education: { bg: 'bg-cyan-500/20', text: 'text-cyan-400', chart: '#22d3ee' },
  other: { bg: 'bg-gray-500/20', text: 'text-gray-400', chart: '#94a3b8' },
};

// --- State ---
let currentLang = localStorage.getItem('catatduit_lang') || 'id';
let currentTheme = localStorage.getItem('catatduit_theme') || 'dark';
let chartView = 'category';
let deleteTargetId = null;
let expenseChart = null;

// --- Helpers ---
function getExpenses() {
  return JSON.parse(localStorage.getItem('catatduit_expenses') || '[]');
}

function saveExpenses(data) {
  localStorage.setItem('catatduit_expenses', JSON.stringify(data));
}

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function formatCurrency(num) {
  return 'Rp ' + num.toLocaleString('id-ID');
}

function t(key) {
  return translations[currentLang]?.[key] || translations.id[key] || key;
}

function getCategoryLabel(cat) {
  return t(categoryKeys[cat] || 'catOther');
}

function trxCount(n) {
  if (currentLang === 'id') return `${n} transaksi`;
  return `${n} transaction${n === 1 ? '' : 's'}`;
}

function getToday() {
  const d = new Date();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${d.getFullYear()}-${month}-${day}`;
}

// Parse YYYY-MM-DD as a local date (avoids UTC off-by-one on day labels)
function parseDateStr(dateStr) {
  const [y, m, d] = dateStr.split('-').map(Number);
  return new Date(y, m - 1, d);
}

function formatDayLabel(dateStr) {
  const dt = parseDateStr(dateStr);
  return dt.toLocaleDateString(currentLang === 'id' ? 'id-ID' : 'en-US', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
  });
}

function isToday(dateStr) {
  return dateStr === getToday();
}

function isThisWeek(dateStr) {
  const d = parseDateStr(dateStr);
  const now = new Date();
  const startOfWeek = new Date(now);
  startOfWeek.setDate(now.getDate() - now.getDay());
  startOfWeek.setHours(0, 0, 0, 0);
  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 7);
  return d >= startOfWeek && d < endOfWeek;
}

function isThisMonth(dateStr) {
  const d = parseDateStr(dateStr);
  const now = new Date();
  return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
}

// --- Theme ---
function applyTheme() {
  const html = document.documentElement;
  const lightBg = document.getElementById('lightBg');
  const moonIcon = document.getElementById('moonIcon');
  const sunIcon = document.getElementById('sunIcon');
  const themeMeta = document.getElementById('themeColorMeta');
  const body = document.body;

  if (currentTheme === 'dark') {
    html.classList.add('dark');
    html.classList.remove('light');
    body.classList.add('bg-surface-950', 'text-white');
    body.classList.remove('bg-surface-50', 'text-surface-900');
    lightBg?.classList.add('hidden');
    moonIcon?.classList.remove('hidden');
    sunIcon?.classList.add('hidden');
  } else {
    html.classList.remove('dark');
    html.classList.add('light');
    body.classList.remove('bg-surface-950', 'text-white');
    body.classList.add('bg-surface-50', 'text-surface-900');
    lightBg?.classList.remove('hidden');
    moonIcon?.classList.add('hidden');
    sunIcon?.classList.remove('hidden');
  }

  if (themeMeta) {
    themeMeta.content = currentTheme === 'dark' ? '#020617' : '#f8fafc';
  }
}

function toggleTheme() {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('catatduit_theme', currentTheme);
  applyTheme();
  renderChart();
}

// --- Language ---
function applyLang() {
  const langBtn = document.getElementById('langToggle');
  langBtn.textContent = currentLang === 'id' ? '🇮🇩 ID' : '🇬🇧 EN';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang]?.[key]) {
      el.textContent = translations[currentLang][key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[currentLang]?.[key]) {
      el.placeholder = translations[currentLang][key];
    }
  });

  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    if (translations[currentLang]?.[key]) {
      el.title = translations[currentLang][key];
    }
  });

  document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria-label');
    if (translations[currentLang]?.[key]) {
      el.setAttribute('aria-label', translations[currentLang][key]);
    }
  });

  // Update select options
  const catSelect = document.getElementById('inputCategory');
  if (catSelect) {
    catSelect.options[0].textContent = t('selectCategory');
    const cats = ['food', 'transport', 'shopping', 'bills', 'entertainment', 'health', 'education', 'other'];
    cats.forEach((cat, i) => {
      catSelect.options[i + 1].textContent = getCategoryLabel(cat);
    });
  }

  // Update submit button
  const editId = document.getElementById('editId').value;
  const btnSubmit = document.querySelector('#btnSubmit span');
  if (btnSubmit) {
    btnSubmit.textContent = editId ? t('update') : t('save');
  }
}

function toggleLang() {
  currentLang = currentLang === 'id' ? 'en' : 'id';
  localStorage.setItem('catatduit_lang', currentLang);
  applyLang();
  renderTransactions();
  renderChart();
}

// --- Stats ---
function updateStats() {
  const expenses = getExpenses();
  const today = expenses.filter(e => isToday(e.date));
  const week = expenses.filter(e => isThisWeek(e.date));
  const month = expenses.filter(e => isThisMonth(e.date));

  const sum = arr => arr.reduce((s, e) => s + e.amount, 0);

  document.getElementById('statToday').textContent = formatCurrency(sum(today));
  document.getElementById('statWeek').textContent = formatCurrency(sum(week));
  document.getElementById('statMonth').textContent = formatCurrency(sum(month));
  document.getElementById('statTotal').textContent = formatCurrency(sum(expenses));

  document.getElementById('statTodayCount').innerHTML = `${today.length} ${t('transactions')}`;
  document.getElementById('statWeekCount').innerHTML = `${week.length} ${t('transactions')}`;
  document.getElementById('statMonthCount').innerHTML = `${month.length} ${t('transactions')}`;
  document.getElementById('statTotalCount').innerHTML = `${expenses.length} ${t('transactions')}`;
}

// --- Chart ---
function setChartView(view) {
  chartView = view;
  document.getElementById('btnChartCat').className = view === 'category'
    ? 'px-3 py-1.5 rounded-lg text-xs font-medium bg-primary-500/20 text-primary-400 transition-all cursor-pointer'
    : 'px-3 py-1.5 rounded-lg text-xs font-medium bg-surface-800/50 text-surface-200/70 hover:bg-surface-700/50 transition-all cursor-pointer';
  document.getElementById('btnChartDaily').className = view === 'daily'
    ? 'px-3 py-1.5 rounded-lg text-xs font-medium bg-primary-500/20 text-primary-400 transition-all cursor-pointer'
    : 'px-3 py-1.5 rounded-lg text-xs font-medium bg-surface-800/50 text-surface-200/70 hover:bg-surface-700/50 transition-all cursor-pointer';
  renderChart();
}

function renderChart() {
  const expenses = getExpenses();
  const monthExpenses = expenses.filter(e => isThisMonth(e.date));
  const canvas = document.getElementById('expenseChart');
  const emptyMsg = document.getElementById('chartEmpty');

  if (expenseChart) {
    expenseChart.destroy();
  }

  if (monthExpenses.length === 0) {
    emptyMsg.classList.remove('hidden');
    return;
  }
  emptyMsg.classList.add('hidden');

  const textColor = currentTheme === 'dark' ? '#94a3b8' : '#64748b';
  const gridColor = currentTheme === 'dark' ? 'rgba(148,163,184,0.1)' : 'rgba(100,116,139,0.1)';

  if (chartView === 'category') {
    // Doughnut chart by category
    const catTotals = {};
    monthExpenses.forEach(e => {
      catTotals[e.category] = (catTotals[e.category] || 0) + e.amount;
    });

    const labels = Object.keys(catTotals).map(c => getCategoryLabel(c));
    const data = Object.values(catTotals);
    const colors = Object.keys(catTotals).map(c => categoryColors[c]?.chart || '#94a3b8');

    expenseChart = new Chart(canvas, {
      type: 'doughnut',
      data: {
        labels,
        datasets: [{
          data,
          backgroundColor: colors,
          borderWidth: 0,
          hoverOffset: 8,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '65%',
        plugins: {
          legend: {
            position: 'right',
            labels: {
              color: textColor,
              padding: 12,
              usePointStyle: true,
              pointStyleWidth: 10,
              font: { size: 11, family: 'Inter' },
            }
          },
          tooltip: {
            callbacks: {
              label: ctx => ` ${ctx.label}: ${formatCurrency(ctx.parsed)}`
            }
          }
        },
        animation: {
          animateRotate: true,
          duration: 800,
        }
      }
    });
  } else {
    // Bar chart daily for current month
    const dailyTotals = {};
    monthExpenses.forEach(e => {
      dailyTotals[e.date] = (dailyTotals[e.date] || 0) + e.amount;
    });

    const sortedDates = Object.keys(dailyTotals).sort();
    const labels = sortedDates.map(d => {
      const dt = new Date(d);
      return dt.getDate().toString();
    });
    const data = sortedDates.map(d => dailyTotals[d]);

    expenseChart = new Chart(canvas, {
      type: 'bar',
      data: {
        labels,
        datasets: [{
          label: t('daily'),
          data,
          backgroundColor: 'rgba(99,102,241,0.5)',
          borderColor: '#6366f1',
          borderWidth: 1,
          borderRadius: 6,
          borderSkipped: false,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: { color: gridColor },
            ticks: { color: textColor, font: { size: 10, family: 'Inter' } },
          },
          y: {
            grid: { color: gridColor },
            ticks: {
              color: textColor,
              font: { size: 10, family: 'Inter' },
              callback: v => formatCurrency(v),
            },
            beginAtZero: true,
          }
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: ctx => ` ${formatCurrency(ctx.parsed.y)}`
            }
          }
        },
        animation: {
          duration: 600,
        }
      }
    });
  }
}

// --- Filters ---
// Date and month filters are mutually exclusive so results are never empty by accident.
function onDateFilterChange() {
  const dateVal = document.getElementById('filterDate').value;
  if (dateVal) {
    document.getElementById('filterMonth').value = '';
  }
  updateFilterUI();
  renderTransactions();
}

function onMonthFilterChange() {
  if (document.getElementById('filterMonth').value) {
    document.getElementById('filterDate').value = '';
  }
  updateFilterUI();
  renderTransactions();
}

function setDateFilter(dateStr) {
  document.getElementById('filterDate').value = dateStr;
  document.getElementById('filterMonth').value = '';
  updateFilterUI();
  renderTransactions();
}

function clearDateFilter() {
  document.getElementById('filterDate').value = '';
  const now = new Date();
  document.getElementById('filterMonth').value =
    `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
  updateFilterUI();
  renderTransactions();
}

function updateFilterUI() {
  const dateVal = document.getElementById('filterDate').value;
  const clearBtn = document.getElementById('clearDateBtn');
  const todayBtn = document.getElementById('todayFilterBtn');
  const monthInput = document.getElementById('filterMonth');
  const summary = document.getElementById('filterSummary');

  if (dateVal) {
    clearBtn.classList.remove('hidden');
    clearBtn.classList.add('flex');
    // Month and date filters are exclusive; hide the month picker while a date is active
    monthInput.classList.add('hidden');
    summary.classList.remove('hidden');
    summary.classList.add('flex');
  } else {
    clearBtn.classList.add('hidden');
    clearBtn.classList.remove('flex');
    monthInput.classList.remove('hidden');
    summary.classList.add('hidden');
    summary.classList.remove('flex');
  }

  // Highlight the quick "Today" button when today is the active filter
  todayBtn.classList.toggle('is-active', !!dateVal && dateVal === getToday());
}

// --- Transactions ---
function renderTransactions() {
  const expenses = getExpenses();
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  const filterCat = document.getElementById('filterCategory').value;
  const filterMonth = document.getElementById('filterMonth').value;
  const filterDate = document.getElementById('filterDate').value;

  let filtered = expenses;

  if (searchTerm) {
    filtered = filtered.filter(e =>
      (e.note || '').toLowerCase().includes(searchTerm) ||
      getCategoryLabel(e.category).toLowerCase().includes(searchTerm)
    );
  }

  if (filterCat !== 'all') {
    filtered = filtered.filter(e => e.category === filterCat);
  }

  if (filterMonth) {
    filtered = filtered.filter(e => e.date.startsWith(filterMonth));
  }

  if (filterDate) {
    filtered = filtered.filter(e => e.date === filterDate);
  }

  // Sort by date desc, then by creation order desc
  filtered.sort((a, b) => {
    if (a.date !== b.date) return b.date.localeCompare(a.date);
    return (b.createdAt || 0) - (a.createdAt || 0);
  });

  const container = document.getElementById('transactionList');

  // Summary bar for a specific date
  if (filterDate) {
    const dayTotal = filtered.reduce((s, e) => s + e.amount, 0);
    document.getElementById('filterSummaryText').textContent =
      `${t('resultOn')} ${formatDayLabel(filterDate)} · ${trxCount(filtered.length)}`;
    document.getElementById('filterSummaryTotal').textContent = formatCurrency(dayTotal);
  }

  if (filtered.length === 0) {
    const hasFilter = filterDate || filterMonth || filterCat !== 'all' || searchTerm;
    const emptyMsg = filterDate ? t('noResultDate') : (hasFilter ? t('noResult') : t('noExpenses'));
    container.innerHTML = `
      <div class="text-center py-12 text-surface-200/40">
        <svg class="w-16 h-16 mx-auto mb-3 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
        </svg>
        <p>${emptyMsg}</p>
      </div>`;
    return;
  }

  // Group by date
  const grouped = {};
  filtered.forEach(e => {
    if (!grouped[e.date]) grouped[e.date] = [];
    grouped[e.date].push(e);
  });

  let html = '';
  const sortedDates = Object.keys(grouped).sort((a, b) => b.localeCompare(a));

  sortedDates.forEach(date => {
    const items = grouped[date];
    const dayTotal = items.reduce((s, e) => s + e.amount, 0);
    const dayLabel = formatDayLabel(date);

    html += `
      <div class="mb-4">
        <div class="flex items-center justify-between mb-2 px-1">
          <span class="text-xs font-semibold text-surface-200/50 uppercase tracking-wider">${dayLabel}</span>
          <span class="text-xs font-bold text-expense-400">${formatCurrency(dayTotal)}</span>
        </div>
        <div class="space-y-1.5">`;

    items.forEach(e => {
      const colors = categoryColors[e.category] || categoryColors.other;
      html += `
          <div class="tx-row flex items-center gap-3 px-4 py-3 rounded-xl bg-surface-900/30 dark:bg-surface-900/30 hover:bg-surface-800/50 dark:hover:bg-surface-800/50 group transition-all">
            <div class="cat-badge w-10 h-10 rounded-xl ${colors.bg} flex items-center justify-center flex-shrink-0">
              <span class="text-lg">${getCategoryLabel(e.category).split(' ')[0]}</span>
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium truncate">${e.note || getCategoryLabel(e.category)}</p>
              <p class="text-xs ${colors.text} opacity-70">${getCategoryLabel(e.category)}</p>
            </div>
            <div class="text-right flex-shrink-0">
              <p class="text-sm font-bold text-expense-400">-${formatCurrency(e.amount)}</p>
            </div>
            <div class="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
              <button onclick="editExpense('${e.id}')" class="w-8 h-8 rounded-lg bg-primary-500/20 text-primary-400 flex items-center justify-center hover:bg-primary-500/30 transition-all cursor-pointer">
                <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
              </button>
              <button onclick="openDeleteModal('${e.id}')" class="w-8 h-8 rounded-lg bg-expense-500/20 text-expense-400 flex items-center justify-center hover:bg-expense-500/30 transition-all cursor-pointer">
                <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
              </button>
            </div>
          </div>`;
    });

    html += `
        </div>
      </div>`;
  });

  container.innerHTML = html;
}

// --- CRUD ---
function handleSubmit(e) {
  e.preventDefault();

  const amount = parseInt(document.getElementById('inputAmount').value);
  const category = document.getElementById('inputCategory').value;
  const note = document.getElementById('inputNote').value.trim();
  const date = document.getElementById('inputDate').value;
  const editId = document.getElementById('editId').value;

  if (!amount || !category || !date) return;

  const expenses = getExpenses();

  if (editId) {
    // Update
    const idx = expenses.findIndex(ex => ex.id === editId);
    if (idx !== -1) {
      expenses[idx] = { ...expenses[idx], amount, category, note, date };
    }
    document.getElementById('editId').value = '';
    document.querySelector('#btnSubmit span').textContent = t('save');
    showToast(t('updated'));
  } else {
    // Create
    expenses.push({
      id: generateId(),
      amount,
      category,
      note,
      date,
      createdAt: Date.now(),
    });
    showToast(t('saved'));
  }

  saveExpenses(expenses);
  e.target.reset();
  document.getElementById('inputDate').value = getToday();

  // Make sure the entry that was just saved is visible in the list
  const dateFilterEl = document.getElementById('filterDate');
  const monthFilterEl = document.getElementById('filterMonth');
  if (dateFilterEl.value) {
    dateFilterEl.value = date;
    monthFilterEl.value = '';
  } else if (monthFilterEl.value && !date.startsWith(monthFilterEl.value)) {
    monthFilterEl.value = date.slice(0, 7);
  }

  updateFilterUI();
  updateStats();
  renderTransactions();
  renderChart();
}

function editExpense(id) {
  const expenses = getExpenses();
  const expense = expenses.find(e => e.id === id);
  if (!expense) return;

  document.getElementById('inputAmount').value = expense.amount;
  document.getElementById('inputCategory').value = expense.category;
  document.getElementById('inputNote').value = expense.note || '';
  document.getElementById('inputDate').value = expense.date;
  document.getElementById('editId').value = id;

  const btnSubmit = document.querySelector('#btnSubmit span');
  btnSubmit.textContent = t('update');

  // Scroll to form
  document.getElementById('expenseForm').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function openDeleteModal(id) {
  deleteTargetId = id;
  const modal = document.getElementById('deleteModal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeDeleteModal() {
  deleteTargetId = null;
  const modal = document.getElementById('deleteModal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

function confirmDelete() {
  if (!deleteTargetId) return;

  let expenses = getExpenses();
  expenses = expenses.filter(e => e.id !== deleteTargetId);
  saveExpenses(expenses);
  closeDeleteModal();
  showToast(t('deleted'));
  updateStats();
  renderTransactions();
  renderChart();
}

// --- Share to WhatsApp ---
function shareToWA() {
  const expenses = getExpenses();
  const monthExpenses = expenses.filter(e => isThisMonth(e.date));

  if (monthExpenses.length === 0) {
    showToast(currentLang === 'id' ? '📭 Tidak ada data bulan ini' : '📭 No data this month');
    return;
  }

  const now = new Date();
  const monthLabel = currentLang === 'id'
    ? now.toLocaleDateString('id-ID', { month: 'long', year: 'numeric' })
    : now.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  const dateLabel = currentLang === 'id'
    ? now.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
    : now.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });

  let msg = `💰 *Catat Pengeluaran - ${currentLang === 'id' ? 'Laporan' : 'Report'} ${monthLabel}*\n`;
  msg += `📅 ${dateLabel}\n\n`;

  // Group by category
  const catTotals = {};
  monthExpenses.forEach(e => {
    catTotals[e.category] = (catTotals[e.category] || 0) + e.amount;
  });

  Object.entries(catTotals)
    .sort((a, b) => b[1] - a[1])
    .forEach(([cat, total]) => {
      msg += `${getCategoryLabel(cat)}: ${formatCurrency(total)}\n`;
    });

  const grandTotal = monthExpenses.reduce((s, e) => s + e.amount, 0);
  msg += `\n━━━━━━━━━━━━━━━━━━\n`;
  msg += `*TOTAL: ${formatCurrency(grandTotal)}*\n`;
  msg += `📊 ${monthExpenses.length} ${t('transactions')}\n\n`;

  // Recent 5 transactions
  const recent = [...monthExpenses].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 5);
  if (recent.length > 0) {
    msg += `📋 ${currentLang === 'id' ? 'Transaksi Terakhir' : 'Recent Transactions'}:\n`;
    recent.forEach(e => {
      const dt = new Date(e.date);
      const dateStr = `${dt.getDate()}/${dt.getMonth() + 1}`;
      msg += `• ${dateStr} — ${e.note || getCategoryLabel(e.category)} — ${formatCurrency(e.amount)}\n`;
    });
  }

  msg += `\n_${currentLang === 'id' ? 'Dikirim dari' : 'Sent from'} Catatan Pengeluaran 📱`;

  const encoded = encodeURIComponent(msg);
  window.open(`https://wa.me/?text=${encoded}`, '_blank');
}

// --- PWA: install & service worker ---
let deferredInstallPrompt = null;

function isIOS() {
  return /iphone|ipad|ipod/i.test(navigator.userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
}

function isStandalone() {
  return window.matchMedia('(display-mode: standalone)').matches ||
    window.navigator.standalone === true;
}

function updateInstallButton() {
  const banner = document.getElementById('installBanner');
  if (!banner) return;
  const dismissed = sessionStorage.getItem('catatduit_install_dismissed') === '1';
  const show = !isStandalone() && !dismissed && (!!deferredInstallPrompt || isIOS());
  banner.classList.toggle('hidden', !show);
}

function dismissInstallBanner() {
  sessionStorage.setItem('catatduit_install_dismissed', '1');
  updateInstallButton();
}

function promptInstall() {
  if (deferredInstallPrompt) {
    deferredInstallPrompt.prompt();
    deferredInstallPrompt.userChoice.then(choice => {
      if (choice.outcome === 'accepted') showToast(t('installing'));
      deferredInstallPrompt = null;
      updateInstallButton();
    }).catch(() => {});
    return;
  }

  // Browser tanpa prompt otomatis (iOS/desktop tertentu): tampilkan petunjuk manual
  document.getElementById('installHint').textContent =
    isIOS() ? t('installHintIos') : t('installHintGeneric');
  const modal = document.getElementById('installModal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeInstallModal() {
  const modal = document.getElementById('installModal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

function setupPWA() {
  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    deferredInstallPrompt = e;
    updateInstallButton();
  });

  window.addEventListener('appinstalled', () => {
    deferredInstallPrompt = null;
    updateInstallButton();
    closeInstallModal();
    showToast(t('installedApp'));
  });

  updateInstallButton();

  if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js').catch(() => {});
    });
  }
}

// --- Toast ---
function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toastMessage');
  toastMessage.textContent = message;
  toast.classList.remove('hidden');

  setTimeout(() => {
    toast.classList.add('hidden');
  }, 3000);
}

// --- Init ---
function init() {
  // Set default date
  document.getElementById('inputDate').value = getToday();

  // Set default month filter to current month
  const now = new Date();
  const monthStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
  document.getElementById('filterMonth').value = monthStr;

  // Apply theme & language
  applyTheme();
  applyLang();

  // Sync date filter UI
  updateFilterUI();

  // PWA: tombol pasang + service worker
  setupPWA();

  // Render
  updateStats();
  renderTransactions();
  renderChart();
}

// Run
document.addEventListener('DOMContentLoaded', init);
