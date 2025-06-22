/* Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Background with overlay */
body {
  height: 100vh;
  background: url('https://www.dropbox.com/scl/fi/bklkz3nytco2rlov82t8w/Picsart_25-06-21_14-31-14-598.png?rlkey=ez3jxk97fem7y15xixe0ryy3s&st=rhzthlm9&dl=0') center center / cover no-repeat;
  font-family: 'Helvetica Neue', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #111;
}

.overlay {
  background-color: rgba(255, 255, 255, 0.7);
  padding: 60px 40px;
  border-radius: 20px;
  text-align: center;
  max-width: 90%;
  backdrop-filter: blur(4px);
}

h1 {
  font-size: 56px;
  font-weight: bold;
  letter-spacing: 3px;
  margin-bottom: 40px;
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.social-links a {
  text-decoration: none;
  color: #111;
  border: 2px solid #111;
  padding: 12px 24px;
  border-radius: 30px;
  font-size: 18px;
  transition: all 0.3s ease;
}

.social-links a:hover {
  background-color: #111;
  color: #fff;
}
