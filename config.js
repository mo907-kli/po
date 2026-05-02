// هنا تحط أسماء الأشخاص اللي تبيهم يشوفون قسم اللوقات
const AllowedLogUsers = ["mo", "admin", "dev"];
// ==========================================
// 1. إعدادات الرتب (Officers - الضباط والقيادة العليا)
// (مهم جداً: الترتيب من الأعلى للأسفل لتحديد من يتحكم بمن)
// ==========================================
const OfficerRanks = [
    "Minister of Interior",
    "Deputy Minister of Interior",
    "A. Minister of Interior",
    "Police Commander",
    "L.S.P.D Chief",
    "Deputy L.S.P.D Chief",
    "A' Lspd Chief",
    "High Commander",
    "General",
    "Colonel",
    "Major",
    "Captain",
    "First Lieutenant",
    "Lieutenant"
];

// ==========================================
// 2. إعدادات الرتب (Enlisted - الأفراد)
// ==========================================
const EnlistedRanks = [
    "Staff Sergeant",
    "First Sergeant",
    "Sergeant",
    "Senior Lead Officer",
    "Senior Officer",
    "Officer III",
    "Officer II",
    "Officer I",
    "Solo Cadet",
    "Cadet"
];

// ==========================================
// 3. الأقسام والرتب الثنائية (Departments)
// ==========================================
const SecondaryRanks = [
    "Police Academy", // مهم جداً لإخفاء التقديمات عن هذا القسم
    "S.W.A.T",
    "Traffic Division",
    "Detective Bureau",
    "Internal Affairs",
    "Air Support"
];

// ==========================================
// 4. حسابات المستخدمين الأساسية (System Users)
// ==========================================
const ConfigUsers = [
    { user: "admin", pass: "123", name: "dev", rank: "Minister of Interior", dept: "" },
    { user: "9fsl", pass: "123", name: "فيصل بن سلمان", rank: "First Lieutenant", dept: "" },
    { user: "mo", pass: "123", name: "dev", rank: "Cadet", dept: "Police Academy" }
];

