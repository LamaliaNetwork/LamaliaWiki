import React from "react"
import { useThemeConfig } from "@docusaurus/theme-common"
import FooterLogo from "@theme/Footer/Logo"
import FooterCopyright from "@theme/Footer/Copyright"
import { footerConfig } from "./config"
import * as ICON from "../../components/Icon/Icon"

function Footer() {
  const { footer } = useThemeConfig()
  if (!footer) {
    return null
  }
  const { copyright, links, logo, style } = footer
  return (
    /* Kitt-N 19/11/2024 (add and edit) */
    /* Flowbite Theme Content*/
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">{<FooterLogo logo={logo} />}</div>
          <div className="footer-links">
            {footerConfig.footerSections.map((section, index) => (
              <div className="footer-section" key={index}>
                <h2 className="section-title">{section.title}</h2>
                <ul className="section-list">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href={link.url} className="section-link">
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="footer-divider" />
        <div className="footer-bottom">
          {footerConfig.copyrightText && (
            <FooterCopyright copyright={footerConfig.copyrightText} />
          )}
          <div className="footer-social">
            <a
              href={footerConfig.socialLinks.facebook}
              className="social-icon"
              aria-label="Facebook page"
            >
              <ICON.Facebook />
            </a>
            <a
              href={footerConfig.socialLinks.discord}
              className="social-icon"
              aria-label="Discord community"
            >
              <ICON.Discord />
            </a>
            <a
              href={footerConfig.socialLinks.store}
              className="social-icon"
              aria-label="Official Store"
            >
              <ICON.Store />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default React.memo(Footer)
