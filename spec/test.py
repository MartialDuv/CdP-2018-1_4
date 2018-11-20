import unittest
from selenium import webdriver
from selenium.webdriver.common.keys import Keys

driver = webdriver.Firefox()
driver.get("localhost:3000")
#assert "Facebook" in driver.title check le titre de la page
create_btn = driver.find_element_by_css_selector("input[type=\"submit\"]")
create_btn.click()

create_url = driver.current_url
self.assertEqual(create_url, "localhost:3000/creaproject")

driver.close()
