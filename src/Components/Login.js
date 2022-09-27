import React, { Component } from 'react'
import './Login.css';
class Login extends Component {
  render() {
    return (
        <div class = "container">
<body>
  <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signin my-5">
          <div class="card-body">
            <h5 class="card-title text-center">Sign In</h5>
            <form class="form-signin">
              <div class="form-floating form-label-group">
                <input type="email" id="inputEmail" class="form-control bg-info" placeholder="Email address" required autofocus />
                <label for="inputEmail">Email address</label>
              </div>

              <div class="form-floating form-label-group">
              <span class="glyphicon glyphicon-user"></span>
                <input type="password" id="inputPassword" class="form-control bg-info" placeholder="Password" required />
                <label for="inputPassword">Password</label>
              </div>

              <div class="custom-control custom-checkbox mb-3">
                <input type="checkbox" class="custom-control-input" id="customCheck1" />
                <label class="custom-control-label text-primary" for="customCheck1">Remember password</label>
              </div>
              <button class="btn btn-lg btn-outline-success btn-block text-uppercase" type="submit">Sign in</button>
              <hr class="my-4" />
             <div class = "btn-group-justified gap-3 row">
             
                        <button type="button" class="btn btn-danger text-uppercase"><i class="fab fa-google mr-10"></i>Sign in with Google</button>
                        <button type="button" class="btn btn-warning text-uppercase"><i class="fab fa-facebook-f mr-2"></i> Sign in with Facebook</button>
             </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>

      </div>
    )
  }
}

export default Login