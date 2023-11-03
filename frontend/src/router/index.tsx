import { Route, Routes, Navigate } from 'react-router-dom';

const Router = () => {
  return (

    <Routes>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>

  );
};

export default Router;
