import gsap from 'gsap';

class AuthGsapTimelines {
    constructor(activeState, setActiveState, signupRef, workableRef, closeableRef) {
        this.activeState = activeState;
        this.setActiveState = setActiveState;
        this.signupRef = signupRef;
        this.workableRef = workableRef;
        this.closeableRef = closeableRef;
    }
    TransitionSignupToLogin = () => {
        if (this.activeState === "SIGNUP") {
            this.setActiveState("LOGIN");
            const tl1 = gsap.timeline();
            tl1.to(this.signupRef.current, { left: "95%", duration: 0.4 });
            tl1.to(this.workableRef.current, { backgroundColor: "white", delay: -0.4, duration: 0.4, height: "60vh" });
            tl1.to(this.closeableRef.current, { transform: "scale(0)", delay: -0.4, duration: 0.2 });
            tl1.play();
        }
    }
    TransitionLoginToSignup = () => {
        if (this.activeState === "LOGIN") {
            this.setActiveState("SIGNUP");
            const tl1 = gsap.timeline();
            tl1.to(this.signupRef.current, { left: "calc(3rem)", boxShadow: "5px 0px black", duration: 0.4 });
            tl1.to(this.workableRef.current, { backgroundColor: "rgba(80, 80, 80)", delay: -0.4, duration: 0.4, height: this.workableRef.current.scrollHeight });
            tl1.to(this.closeableRef.current, { transform: "scale(1)", delay: -0.3, duration: 0.2 });
            tl1.play();
        }
    }
}
export default AuthGsapTimelines;