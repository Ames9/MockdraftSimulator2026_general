from playwright.sync_api import sync_playwright
import time

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Listen for console events
        page.on("console", lambda msg: print(f"PAGE LOG: {msg.text}"))
        page.on("pageerror", lambda err: print(f"PAGE ERROR: {err}"))

        page.goto("http://localhost:8004")
        
        page.click("#language-modal button")
        page.wait_for_selector("#team-dal")
        page.click("#team-dal")
        page.click("#non-saints-modal button")
        page.click("#start-modal button")
        
        # Click start
        page.click("#btn-start-sim")
        
        # Wait 5 seconds to let the simulation process
        time.sleep(5)
        
        browser.close()

run()
