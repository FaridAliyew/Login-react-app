import React, { useState, useEffect } from 'react';
import { FaRegUser } from "react-icons/fa";
import { TbPasswordUser } from "react-icons/tb";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

function Register() {
    const [formValues, setFormValues] = useState({ username: '', email: '', password: '' });
    const [formErrors, setFormErrors] = useState({});
    
    useEffect(() => {
        const darkMode = localStorage.getItem('darkMode');
        if (darkMode === 'enabled') {
            document.body.classList.add('dark-mode');
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const validateForm = () => {
        const errors = {};
        if (!formValues.username) {
            errors.username = "İstifadəçi adı tələb olunur";
        } else if (/^\d+$/.test(formValues.username)) {
            errors.username = "İstifadəçi adı rəqəmlərdən ibarət ola bilməz";
        }
        if (!formValues.email) {
            errors.email = "Email ünvanı tələb olunur";
        }
        if (!formValues.password) {
            errors.password = "Şifrə tələb olunur";
        } else if (formValues.password.length < 6) {
            errors.password = "Şifrənin uzunluğu 6 simvoldan az olmamalıdır";
        }
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length === 0) {
            alert('Form uğurla göndərildi');
            localStorage.setItem("FormValues", JSON.stringify(formValues));
            document.querySelector('.main-container').style.display = 'none';
            document.querySelector('.main-container-3').style.display = 'block';
        } else {
            setFormErrors(errors);
        }
    };

    const darkModeToggle = () => {
        const body = document.body;
        body.classList.toggle("dark-mode");
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    };

    return (
        <div className="main-container">
            <div className="registerImg"></div>

            <div className="regisContainer">
                <MdDarkMode 
                    style={{ position: "relative", top:"20px" , left: "430px", fontSize:"20px", cursor:"pointer" }} 
                    onClick={darkModeToggle} 
                />
                <h3 className='register'>Qeydiyyat</h3>
                <p className="p1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, minus.</p>

                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <FaRegUser className="icon" />
                        <input
                            type="text"
                            name="username"
                            placeholder="İstifadəçi adı"
                            value={formValues.username}
                            onChange={handleInputChange}
                        />
                    </div>
                    {formErrors.username && <p className="error">{formErrors.username}</p>}

                    <div className="input-container">
                        <MdOutlineMailOutline className="icon" />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email ünvanı"
                            value={formValues.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    {formErrors.email && <p className="error">{formErrors.email}</p>}

                    <div className="input-container">
                        <TbPasswordUser className="icon" />
                        <input
                            type="password"
                            name="password"
                            placeholder="Şifrə"
                            value={formValues.password}
                            onChange={handleInputChange}
                        />
                    </div>
                    {formErrors.password && <p className="error">{formErrors.password}</p>}

                    <button type="submit" className="submit">Qeydiyyat</button>
                </form>
            </div>
        </div>
    );
}

export default Register;
