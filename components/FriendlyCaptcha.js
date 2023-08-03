import { useEffect, useRef } from "react";
import { WidgetInstance } from 'friendly-challenge';

const FriendlyCaptcha = ({ onCaptchaSolved }) => {
    const container = useRef();
    const widget = useRef();

    const doneCallback = (solution) => {
        console.log('Captcha was solved. The form can be submitted.');
        console.log(solution);
        onCaptchaSolved(solution); // Call the onCaptchaSolved callback
    }

    const errorCallback = (err) => {
        console.log('There was an error when trying to solve the Captcha.');
        console.log(err);
    }

    useEffect(() => {
        if (!widget.current && container.current) {
            widget.current = new WidgetInstance(container.current, {
                startMode: "none",
                doneCallback: doneCallback,
                errorCallback: errorCallback
            });
        }

        return () => {
            if (widget.current != undefined) widget.current.reset();
        }
    }, [onCaptchaSolved]);

    return (
        <div ref={container} className="frc-captcha" data-sitekey="FCMON3HCAL59VK3O" />
    );
}

export default FriendlyCaptcha;