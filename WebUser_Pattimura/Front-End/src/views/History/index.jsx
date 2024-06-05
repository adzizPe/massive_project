import './history.scss';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import iconHolify from '../../assets/holify-icon.png';
import imgHistory from '../../assets/history.png';
import instagram from '../../assets/instagram.png';
import twitter from '../../assets/twitter.png';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import Popup from '../component/Popup'; // Import the Popup component


const History = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);
  const [filter, setFilter] = useState('Paling Baru');
  const [selectedReport, setSelectedReport] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });

    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('username');
    setUsername(null);
    navigate('/login');
  };

  return (
    <div className='page'>
      <nav id='beranda'>
        <div className='section-navbar'>
          <img src={iconHolify} alt="icon" />
          <div className='section-list'>
            <h4 onClick={() => navigate('/')}>Beranda</h4>
            <h4 className='active'>Riwayat</h4>
            <h4 onClick={() => navigate('/?faq')}>FAQ</h4>
            <h4 onClick={() => navigate('/?aboutUs')}>Tentang Kami</h4>
          </div>
          <div className='section-btn-login'>
            {username ? (
              <>
                <button onClick={() => navigate('/profile')}>Hi, {username}</button>
                <button className='btn-logout' onClick={handleLogout}><LogoutRoundedIcon /></button>
              </>
            ) : (
              <button onClick={() => navigate('/login')}>Masuk</button>
            )}
          </div>
        </div>
      </nav>
      <main>
        <div className='section-main-history'>
          <h2>Riwayat Laporan</h2>
          <p>Laporan yang pernah dikirim oleh masyarakat</p>
        </div>
        <div className='section-list-btn'>
          <button className='active-btn'>Paling Baru</button>
          <button>Paling Lama</button>
          <button>Menunggu</button>
          <button>Diproses</button>
          <button>Selesai</button>
        </div>
        <div className='section-history'>
          <img src={imgHistory} alt="history" />
          <div className='desc'>
            <h3>Depan Pasar Sukaramai</h3>
            <p className='info-hole'>5 Lubang</p>
            <div className='rapporteur'>
              <p>Oleh Pattimura</p>
              <p>10 jam yang lalu</p>
            </div>
          </div>
        </div>
        <div className='section-history'>
          <img src={imgHistory} alt="history" />
          <div className='desc'>
            <h3>Depan Pasar Sukaramai</h3>
            <p className='info-hole'>5 Lubang</p>
            <div className='rapporteur'>
              <p>Oleh Pattimura</p>
              <p>10 jam yang lalu</p>
            </div>
          </div>
        </div>
        <div className='section-history'>
          <img src={imgHistory} alt="history" />
          <div className='desc'>
            <h3>Depan Pasar Sukaramai</h3>
            <p className='info-hole'>5 Lubang</p>
            <div className='rapporteur'>
              <p>Oleh Pattimura</p>
              <p>10 jam yang lalu</p>
            </div>
          </div>
        </div>
        <footer className='history-footer'>
          <div className='section-footer'>
            <div className='section-list'>
              <p onClick={() => navigate('/')}>Beranda</p>
              <p onClick={() => window.scrollTo(0, 0)}>Riwayat</p>
              <p onClick={() => navigate('/?faq')}>FAQ</p>
              <p onClick={() => navigate('/?aboutUs')}>Tentang Kami</p>
            </div>
            <div className='cpyright'>
              <p>@2024 Holify.com - All rights reserved</p>
            </div>
            <div className='sosmed'>
              <img src={instagram} alt="instagram" />
              <img src={twitter} alt="twitter" />
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default History;