# Survey-admin(설문-관리자페이지) 프로젝트

<img src="https://user-images.githubusercontent.com/76725512/182094370-9547c841-1533-4cf0-87b4-9f723b025038.png" />

<img src="https://user-images.githubusercontent.com/76725512/182094350-b8c4c2d6-a13e-4b13-bc78-d47c97ebd25e.png" />

---

## 🪛 Ant Design

기본적인 레이아웃과 리스트, 폼요소 전체를 antDesign을 활용해 구성

```jsx
import { Layout, Menu } from 'antd';

function MainLayout({ selectedKeys, children, padding = 45 }) {
  const contentStyle = useMemo(() => {
    return { padding };
  }, [padding]);

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      ...
    </Layout>
  );
}

export default MainLayout;
```

## 🪛 react-router-dom

페이지 이동을 위한 라우팅 처리

```jsx
import { Route, Routes } from 'react-router-dom';

import BuilderPage from './pages/BuilderPage';
import ListPage from './pages/ListPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/builder" element={<BuilderPage />} />
        <Route path="/builder/:surveyId" element={<BuilderPage />} />
      </Routes>
    </div>
  );
}
```

## 🪛 useSWR(React Hooks)

JSON서버에서 데이터 가져오기

```jsx
import useSWR from 'swr';


function ListPage() {
  const { data, error, mutate } = useSWR(
    '/surveys?_sort=id&_order=desc',
    fetcher,
  );
  ...
}

export default ListPage;
```

## 🪛 Redux

Prop drilling방지를 위한 전역 상태관리(redux-toolkit으로 관리)

```jsx
import { createSlice } from '@reduxjs/toolkit';

export const surveySlice = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.data.title = action.payload;
    },
    ...
  },
});
```

## 🪛 Redux - Middleware

리덕스 미들웨어로 API연동하기

```jsx
import { configureStore } from '@reduxjs/toolkit';

import thunk from './middleware/thunk';
import selectedQuestionIdReducer from './selectedQuestionId/selectedQuestionIdSlice';
import surveyReducer from './survey/surveySlice';

export default configureStore({
  reducer: {
    survey: surveyReducer,
    selectedQuestionId: selectedQuestionIdReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
```
