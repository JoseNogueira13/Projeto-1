function showLoginRegister() {
    console.log("LoginRegister");
    let result = `
    <div class="modal fade" id="mdlLogin" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="mdlLoginLabel">Login</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form id="frmLogin">
            <div class="modal-body">
                <div class="form-group">
                    <label for="txtUsername">Username</label>
                    <input 
                    type="text"
                    class="form-control"
                    id="txtUsername"
                    placeholder="Enter username"
                    />
                </div>

                <div class="form-group">
                    <label for="txtPassword">Password</label>
                    <input 
                    type="password"
                    class="form-control"
                    id="txtPassword"
                    placeholder="Enter password"
                    />
                </div>
            </div>
                
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
            </form>
            <div class="row">
                <div class="col">
                  <div id="msgLogin"></div>
                </div>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="mdlRegister" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="mdlRegisterLabel">Register</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form id="frmRegister">
            <div class="modal-body">
                <div class="form-group">
                    <label for="txtUsernameRegister">Username</label>
                    <input 
                    type="text"
                    class="form-control"
                    id="txtUsernameRegister"
                    placeholder="Enter username"
                    />
                </div>

                <div class="form-group">
                    <label for="txtPasswordRegister">Password</label>
                    <input 
                    type="password"
                    class="form-control"
                    id="txtPasswordRegister"
                    placeholder="Enter password"
                    />
                </div>

                <div class="form-group">
                    <label for="txtPasswordRegisterConfirm">Confirm Password</label>
                    <input 
                    type="password"
                    class="form-control"
                    id="txtPasswordRegisterConfirm"
                    placeholder="Confirm your password"
                    />
                </div>
                
                <div class="form-group">
                    <label for="txtEmailRegister">E-Mail</label>
                    <input 
                    type="email"
                    class="form-control"
                    id="txtEmailRegister"
                    placeholder="Enter E-Mail"
                    />
                </div>
            </div>
                
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
            </form>
            <div class="row">
                <div class="col">
                  <div id="msgRegister"></div>
                </div>
            </div>
          </div>
        </div>
      </div>
    `


document.querySelector("#loginRegister").innerHTML = result;
}

showLoginRegister();