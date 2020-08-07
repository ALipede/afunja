// import React from 'react'
// import MailchimpSubscribe from 'react-mailchimp-subscribe'

// const url = 'https://afunja.us17.list-manage.com/subscribe/post?u=7271b01c847bf695e0d59d4ce&amp;id=7b7c023b59';

// // simplest form (only email)
// const SimpleForm = () => <MailchimpSubscribe url={url}/>

// // use the render prop and your custom form
// export default function MailChimp() {
// const CustomForm = () => (
//   <MailchimpSubscribe
//     url={url}
//     render={({ subscribe, status, message }) => (
//       <div>
//         <MyForm onSubmitted={formData => subscribe(formData)} />
//         {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
//         {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
//         {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
//       </div>
//     )}
//   />
// );
// }

import React from 'react'

export default function MailChimp() {

  return (
    <div>
    <h4>Subscribe</h4>
    <small>Mailchimp mailing list.</small>
  </div>
  );
}

