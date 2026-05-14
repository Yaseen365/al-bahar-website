import smtplib
from email.mime.text import MIMEText
from dotenv import load_dotenv

from fastapi import FastAPI, Form
from fastapi.responses import RedirectResponse
import os
load_dotenv()

app = FastAPI()


@app.get("/")
def home():
    return {"message": "Backend is running successfully"}


@app.post("/submit-form")
def submit_form(
    name: str = Form(...),
    email: str = Form(...),
    phone: str = Form(...),
    interest: str = Form(...)
):
    file_exists = os.path.isfile("submissions.csv")

    with open("submissions.csv", "a", encoding="utf-8") as file:
        if not file_exists:
            file.write("Name,Email,Phone,Interest\n")

        file.write(f"{name},{email},{phone},{interest}\n")
    sender_email = os.getenv("SENDER_EMAIL")
    sender_password = os.getenv("SENDER_PASSWORD")
    receiver_email = os.getenv("RECEIVER_EMAIL")

    subject = "New Investor Lead Submission"
    body = f"""
New Investor Lead Received:

Name: {name}
Email: {email}
Phone: {phone}
Interest: {interest}
"""

    msg = MIMEText(body)
    msg["Subject"] = subject
    msg["From"] = sender_email
    msg["To"] = receiver_email

    with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
        server.login(sender_email, sender_password)
        server.sendmail(sender_email, receiver_email, msg.as_string())

    return RedirectResponse(
        url="http://localhost:3000/?success=true",
        status_code=303
    )