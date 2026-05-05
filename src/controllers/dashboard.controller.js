// Dashboard Controller
// Handles dashboard-related requests

export const getDashboardStats = (req, res) => {
  res.json({
    version: '0.1.0',
    status: 'Base dashboard',
    stats: {
      users: 0,
      transactions: 0,
      spotifyConnections: 0
    }
  });
};

export const getDashboardData = (req, res) => {
  res.json({
    message: 'Dashboard data endpoint',
    data: []
  });
};
