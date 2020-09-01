import React from 'react';
import md5 from 'blueimp-md5';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

import './sign-in.css';
import Footer from './component/Footer';

export default function SignIn() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = () => {
    if (!username || !password) {
      window.alert('请完整输入所需信息');
      return;
    }
    window
      .fetch('/api/user/sign-in', {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ username, password: md5(password) }),
      })
      .then((response) => {
        if (response.status === 200) return response.json();
        else if (response.status === 401) window.alert('用户名或密码错误');
        else window.alert('服务器错误');
      })
      .then((data) => {
        window.sessionStorage.setItem('auth', data);
        window.location = '/';
      });
  };

  return (
    <section class="hero is-info is-fullheight">
      <div className="wrap">
        <header>
          <h1 className="title is-1 has-text-centered">动车段帐项系统</h1>
          <h2 className="subtitle is-2 has-text-centered">EMU Depot</h2>
          <hr />
        </header>

        <main>
          <div className="columns fullheight is-centered is-vcentered">
            <div className="column is-3" style={{ width: '400px' }}>
              <div className="box" style={{ width: '400px' }}>
                <h3 className="title is-3 has-text-dark">登录</h3>
                <hr />
                <div className="field">
                  <label className="label">用户名</label>
                  <div className="control">
                    <input
                      type="text"
                      value={username}
                      className="input"
                      onChange={(event) => setUsername(event.target.value)}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">密码</label>
                  <div className="control">
                    <input
                      type="password"
                      value={password}
                      className="input"
                      onChange={(event) => setPassword(event.target.value)}
                    />
                  </div>
                </div>

                <hr />

                <button
                  type="button"
                  className="button is-fullwidth is-primary"
                  onClick={handleSubmit}
                >
                  <FontAwesomeIcon icon={faSignInAlt} fixedWidth />
                  确定
                </button>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </section>
  );
}
