#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
CodeSnippets 가이드 영역 제거 스크립트

역할:
1. guide.css, prism.css, guide.js, prism.js 링크/스크립트 제거
2. <div class="code-box-group">...</div> 블록 제거
3. <body class="guide-inner"> → <body> 로 변경
4. <script class="script"> → <script> 로 변경
"""

import re
from pathlib import Path

def remove_guide_area(content):
    """가이드 영역 제거 함수"""

    # 1. guide/prism 관련 link/script 태그 제거 (줄 단위)
    content = re.sub(r'[ \t]*<link[^>]*guide_style[^>]*>\n', '', content)
    content = re.sub(r'[ \t]*<link[^>]*plugin/prism[^>]*>\n', '', content)
    content = re.sub(r'[ \t]*<script[^>]*guide\.js[^>]*></script>\n', '', content)
    content = re.sub(r'[ \t]*<script[^>]*plugin/prism\.js[^>]*></script>\n', '', content)

    # 2. body class="guide-inner" 제거
    content = content.replace('<body class="guide-inner">', '<body>')
    content = content.replace("<body class='guide-inner'>", '<body>')

    # 3. <script class="script"> → <script>
    content = content.replace('<script class="script">', '<script>')

    # 4. <div class="code-box-group">...</div> 블록 제거 (depth 카운팅)
    start_tag = '<div class="code-box-group">'
    if start_tag in content:
        start_idx = content.find(start_tag)
        depth = 0
        i = start_idx

        while i < len(content):
            # <div 찾기 (속성 포함)
            if content[i:i+4] == '<div':
                # <div> 또는 <div ...> 형태 인지 확인
                j = i + 4
                while j < len(content) and content[j] not in ('>', ' ', '\t', '\n'):
                    j += 1
                if j < len(content) and content[j] in ('>', ' ', '\t'):
                    depth += 1
                i += 4
            # </div> 찾기
            elif content[i:i+6] == '</div>':
                depth -= 1
                if depth == 0:
                    # code-box-group 블록 끝 찾음
                    end_idx = i + 6
                    # 뒤따르는 개행 제거
                    if end_idx < len(content) and content[end_idx] == '\n':
                        end_idx += 1
                    # 블록 제거
                    content = content[:start_idx] + content[end_idx:]
                    break
                i += 6
            else:
                i += 1

    return content


def process_files():
    """CodeSnippets 폴더 내 HTML 파일 처리"""
    base_path = Path(__file__).parent

    # 처리 대상 디렉토리
    target_dirs = [
        base_path / 'ui-components',
        base_path / 'patterns',
        base_path / 'utilities',
    ]

    count = 0
    for target_dir in target_dirs:
        if not target_dir.exists():
            print(f"[SKIP] {target_dir} not found")
            continue

        # 모든 HTML 파일 찾기
        for html_file in target_dir.rglob('*.html'):
            try:
                # 파일 읽기
                with open(html_file, 'r', encoding='utf-8') as f:
                    content = f.read()

                # 가이드 영역 제거
                cleaned_content = remove_guide_area(content)

                # 변경 여부 확인
                if content != cleaned_content:
                    # 파일 쓰기
                    with open(html_file, 'w', encoding='utf-8') as f:
                        f.write(cleaned_content)
                    count += 1
                    print(f"[OK] {html_file.relative_to(base_path)}")

            except Exception as e:
                print(f"[ERR] {html_file.relative_to(base_path)}: {e}")

    print(f"\n[DONE] {count} files processed")


if __name__ == '__main__':
    process_files()
