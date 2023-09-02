import SignupFormComp from "@/components/views/Signup";
import ContextWrapper from "@/global/Context";


export default function SignupForm() {
    

  return (
    <ContextWrapper>
        <SignupFormComp/>
    </ContextWrapper>
  );
}
