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
    window.console.info(username, password, md5(password));
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
            <div className="column is-3">
              <div className="box">
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
