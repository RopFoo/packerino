import { Route, Routes } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import ItemsPage from '../../pages/ItemsPage';
import LoginPage from '../../pages/LoginPage';
import SetsPage from '../../pages/SetsPage';
import SignUpPage from '../../pages/SignUpPage';
import UserPage from '../../pages/UserPage';

const Router: React.FC = () => {
    const { authData } = useAuth();
    return (
        <Routes>
            <Route path='/' element={<ItemsPage />} />
            {authData?.currentUser ? (
                <>
                    <Route path='/sets' element={<SetsPage />} />
                    <Route path='/items' element={<ItemsPage />} />
                    <Route path='/user' element={<UserPage />} />
                </>
            ) : (
                <>
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/signup' element={<SignUpPage />} />
                </>
            )}
        </Routes>
    );
};

export default Router;
