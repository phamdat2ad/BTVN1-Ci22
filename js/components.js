const components = {}

//components.register ~ form register
components.register = `
<section class="register-container">
    <div class="form-container">
        <div class="logo">
            <span>Techkids Chat</span>
        </div>
        <div class="form-wrapper">
            <form>
                <div class="name-wrapper">
                    <div class="input-wrapper">
                        <input type="text" name="firstname" placeholder="First name">
                    </div>    
                    <div class="input-wrapper">
                            <input type="text" name="lastname" placeholder="Last name">
                    </div>
                </div>
                <div class="input-wrapper">
                    <input type="email" name="email" placeholder="Email">
                </div>
                <div class="input-wrapper">
                    <input type="password" name="password" placeholder="Password">
                </div>
                <div class="input-wrapper">
                    <input type="password" name="confirm password" placeholder="Confirm password">
                </div>                                                
                <div class="form-footer">
                    <a href="#" id="have-an-account">Already have an account? Login</a>
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    </div>
</section>
`
// ========================================

components.login = `
<section class="login-container">
<div class="form-container">
    <div class="logo">
        <span>Techkids Chat</span>
    </div>
    <div class="form-wrapper">
        <form>
            <div class="input-wrapper">
                <input type="email" name="email" placeholder="Email">
            </div>
            <div class="input-wrapper">
                <input type="password" name="password" placeholder="Password">
            </div>                                        
            <div class="form-footer">
                <a href="#">Not yet have an account? Register</a>
                <button type="submit">Login</button>
            </div>
        </form>
    </div>
</div>
</section>
`