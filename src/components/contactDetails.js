const ContactDetails=({contact})=>{
    return(
        <div className="contact-details">
            
            <p><strong>Phone: </strong> {contact.newPhoneNumber}</p>
            <p><strong>Email: </strong> {contact.newEmail}</p>
            
        </div>
    )
}

export default ContactDetails