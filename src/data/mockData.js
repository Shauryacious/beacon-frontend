// --- MOCK DATA FOR DASHBOARD --- //

export const initialTrustScoreData = {
    score: 78,
    breakdown: [
        { name: 'Review Authenticity', value: 400, color: '#3b82f6' },
        { name: 'Seller History', value: 300, color: '#10b981' },
        { name: 'Return Anomalies', value: 300, color: '#f59e0b' },
        { name: 'Image Verification', value: 200, color: '#f97316' },
        { name: 'Description Flags', value: 150, color: '#ef4444' },
    ],
};

export const riskRankingData = [
    { id: 1, asin: 'B08N5HRW3W', sellerName: 'GlobalGadgets', trustScore: 95, flags: ['Verified Seller'], lastUpdated: '2m ago' },
    { id: 2, asin: 'B09V3J8Q4P', sellerName: 'SuperDeals', trustScore: 82, flags: ['New Product'], lastUpdated: '15m ago' },
    { id: 3, asin: 'B07XJ8C8F5', sellerName: 'ElectroSource', trustScore: 45, flags: ['High Returns', 'Review Spike'], lastUpdated: '1h ago' },
    { id: 4, asin: 'B08BFJ846C', sellerName: 'HomeEssentials', trustScore: 88, flags: ['Long History'], lastUpdated: '5h ago' },
    { id: 5, asin: 'B09R2D98B7', sellerName: 'FastShip', trustScore: 22, flags: ['Image Mismatch', 'Unverified'], lastUpdated: '1d ago' },
    { id: 6, asin: 'B07ZJJV1S4', sellerName: 'QualityFinds', trustScore: 76, flags: ['Consistent Sales'], lastUpdated: '2d ago' },
];

export const alertFeedData = [
    { id: 1, type: 'High Risk', message: 'Fake review cluster detected for ASIN B07XJ8C8F5.', time: 'Just now' },
    { id: 2, type: 'Medium Risk', message: 'Image tampering suspected for seller "FastShip".', time: '2 min ago' },
    { id: 3, type: 'Low Risk', message: 'Unusual return rate spike on ASIN B07XJ8C8F5.', time: '15 min ago' },
    { id: 4, type: 'Info', message: 'New seller "GreenLeaf" passed verification.', time: '1 hour ago' },
    { id: 5, type: 'High Risk', message: 'Potential collusion between "FastShip" and "ElectroSource".', time: '3 hours ago' },
];

export const historicalTrendData = [
    { name: '7d ago', trustScore: 85, alerts: 10 },
    { name: '6d ago', trustScore: 82, alerts: 12 },
    { name: '5d ago', trustScore: 88, alerts: 8 },
    { name: '4d ago', trustScore: 75, alerts: 25 },
    { name: '3d ago', trustScore: 78, alerts: 20 },
    { name: '2d ago', trustScore: 80, alerts: 18 },
    { name: 'Yesterday', trustScore: 72, alerts: 35 },
    { name: 'Today', trustScore: 78, alerts: 15 },
];
