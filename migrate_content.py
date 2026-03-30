import os
import re
from bs4 import BeautifulSoup

def extract_projects(html_path):
    with open(html_path, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f, 'html.parser')
    
    projects = []
    project_cards = soup.select('.project-card')
    
    for card in project_cards:
        # Extract basic info
        tags = card.get('data-tags', '')
        project_id = card.get('id', '')
        href = card.get('href', '')
        
        # Extract style (accent colors etc)
        style = card.get('style', '')
        accent = re.search(r'--accent:\s*([^;]+)', style)
        accent_soft = re.search(r'--accent-soft:\s*([^;]+)', style)
        accent_glow = re.search(r'--accent-glow:\s*([^;]+)', style)
        project_image_style = re.search(r'--project-image:\s*([^;]+)', style)
        
        title = card.select_one('.project-card__title').get_text(strip=True)
        meta = card.select_one('.project-card__meta').get_text(strip=True)
        description = card.select_one('.project-card__body p').get_text(strip=True)
        
        highlights = [li.get_text(strip=True) for li in card.select('.project-card__highlights li')]
        date = card.select_one('.project-card__time').get_text(strip=True)
        tag_label = card.select_one('.project-card__tag').get_text(strip=True)
        
        projects.append({
            'id': project_id,
            'title': title,
            'meta': meta,
            'description': description,
            'highlights': highlights,
            'date': date,
            'tag_label': tag_label,
            'tags': tags,
            'href': href,
            'accent': accent.group(1) if accent else '',
            'accent_soft': accent_soft.group(1) if accent_soft else '',
            'accent_glow': accent_glow.group(1) if accent_glow else '',
            'project_image_style': project_image_style.group(1) if project_image_style else ''
        })
    return projects

def save_to_markdown(projects, output_dir):
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
    
    for p in projects:
        filename = f"{p['id']}.md"
        filepath = os.path.join(output_dir, filename)
        
        content = f"""---
title: "{p['title']}"
date: "{p['date']}"
tagLabel: "{p['tag_label']}"
tags: "{p['tags']}"
meta: "{p['meta']}"
description: "{p['description']}"
accent: "{p['accent']}"
accentSoft: "{p['accent_soft']}"
accentGlow: "{p['accent_glow']}"
projectImageStyle: "{p['project_image_style']}"
highlights:
{chr(10).join([f"  - {h}" for h in p['highlights']])}
---

"""
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)

if __name__ == "__main__":
    html_file = 'old_site_backup/index.html'
    output_folder = 'src/content/projects'
    projs = extract_projects(html_file)
    save_to_markdown(projs, output_folder)
    print(f"Successfully converted {len(projs)} projects to Markdown.")
