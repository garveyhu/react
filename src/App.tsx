import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

import Loading from '@/components/complex/loading';
import init from '@/router/init';

function App() {
  return <Suspense fallback={<Loading />}>{useRoutes(init())}</Suspense>;
}

export default App;
