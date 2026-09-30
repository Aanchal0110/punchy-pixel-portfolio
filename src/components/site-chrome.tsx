import { useState, type ReactNode } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { ArrowUpRight, Check, Clipboard, Download, Linkedin, Mail, Phone, RotateCcw, Send, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { gate } from "@/lib/gate";

export function SiteShell({ children, onReplay }: { children: ReactNode; onReplay?: () => void }) {
  const [contactOpen, setContactOpen] = useState(false);
  const [copied, setCopied] = useState("");
  const navigate = useNavigate();

  const copyText = async (label: string, value: string) => {
    await navigator.clipboard.writeText(value);
    setCopied(label);
    window.setTimeout(() => setCopied(""), 1600);
  };

  const replay = () => {
    gate.passed = false;
    if (onReplay) onReplay();
    else navigate({ to: "/" });
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="portfolio-shell animate-fade-in">
      <nav className="gc-nav">
        <Link to="/" className="gc-nav-name"><b>Aditya Salve</b><span>Copywriter</span></Link>
        <div className="gc-nav-links">
          <Link to="/random" activeProps={{ "data-active": "true" }}>Random things</Link>
          <button type="button" onClick={() => setContactOpen(true)}>Contact</button>
        </div>
      </nav>

      {children}

      <footer id="contact" className="site-footer">
        <div className="footer-art"><img src="/under-progress.png" alt="Sign reading: This portfolio is under progress." loading="lazy" /></div>
        <div className="footer-actions">
          <h2 className="footer-contact-title">Contact</h2>
          <a href="mailto:salveaditya15@gmail.com">salveaditya15@gmail.com <ArrowUpRight /></a>
          <a href="tel:+919326250513">+91 93262 50513 <Phone /></a>
          <a href="https://www.linkedin.com/in/aditya-salve-4b51a3284" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight /></a>
          <a href="/Aditya-Salve-Resume.docx" download>Download resume <Download /></a>
        </div>
        <div className="footer-base"><span>© 2026 Aditya Salve</span><Button variant="ghost" onClick={replay}><RotateCcw /> Play boxing again</Button></div>
      </footer>

      {contactOpen && (
        <div className="contact-overlay" role="dialog" aria-modal="true" aria-labelledby="contact-title" onClick={() => setContactOpen(false)}>
          <aside className="contact-drawer" onClick={(event) => event.stopPropagation()}>
            <Button size="icon" variant="ghost" className="drawer-close" onClick={() => setContactOpen(false)} aria-label="Close contact panel"><X /></Button>
            <h2 id="contact-title">Let&apos;s make<br />something happen.</h2>
            <div className="contact-options">
              <div><a href="mailto:salveaditya15@gmail.com"><Mail /> salveaditya15@gmail.com</a><Button size="icon" variant="outline" onClick={() => copyText("email", "salveaditya15@gmail.com")} aria-label="Copy email">{copied === "email" ? <Check /> : <Clipboard />}</Button></div>
              <div><a href="tel:+919326250513"><Phone /> +91 93262 50513</a><Button size="icon" variant="outline" onClick={() => copyText("phone", "9326250513")} aria-label="Copy phone number">{copied === "phone" ? <Check /> : <Clipboard />}</Button></div>
              <a href="https://www.linkedin.com/in/aditya-salve-4b51a3284" target="_blank" rel="noreferrer"><Linkedin /> Connect on LinkedIn <ArrowUpRight /></a>
            </div>
            <Button asChild className="arcade-button mt-8 w-full"><a href="mailto:salveaditya15@gmail.com?subject=Let%27s%20work%20together">Write an email <Send /></a></Button>
            <Button asChild variant="outline" className="mt-3 w-full"><a href="/Aditya-Salve-Resume.docx" download>Download resume <Download /></a></Button>
          </aside>
        </div>
      )}
    </div>
  );
}
