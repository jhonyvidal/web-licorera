import * as React from 'react';
import { Route, Routes } from 'react-router-dom';

import { pathRoutes as path } from './constants/paths';

// Routes
const Dashboard = React.lazy(
  () => import('../modules/dashboard/screen/DashboardScreen')
);

export default function RootRoutes() {
  return (
      <div>
        <Routes>
          <Route  path={path.dashboard} element={
              <React.Suspense fallback={<>...</>}>
                <Dashboard />
              </React.Suspense>
            } />
        </Routes>
      </div>
  );
}
