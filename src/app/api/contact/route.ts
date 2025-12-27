/**
 * @file Contact API Route
 * @description 处理联系表单提交，将数据保存到 Notion，并包含防垃圾邮件逻辑
 */

import { Client } from '@notionhq/client'
import { NextResponse } from 'next/server'

/**
 * 处理 POST 请求
 * @param request 请求对象
 * @returns JSON 响应
 */
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, company, phone, message, lang, website } = body

    // 1. Honeypot 检查
    if (website) {
      console.log('Spam detected (Honeypot):', { email, ip: request.headers.get('x-forwarded-for') })
      return NextResponse.json({ success: true })
    }

    // 2. 内容垃圾检测
    // 检查是否为纯 ASCII 字符且包含异常长单词（针对垃圾机器人生成的随机字符串）
    const isAscii = (str: string) => /^[\x00-\x7F]*$/.test(str)
    const hasLongWord = (str: string, limit: number) => {
      if (!str) return false
      return str.split(/\s+/).some(word => word.length > limit)
    }

    // Name: 如果是纯 ASCII，且包含超过 15 个字符的长单词（通常名字会有空格，且单词不会这么长）
    if (name && isAscii(name) && hasLongWord(name, 15)) {
      console.log('Spam detected (Invalid Name):', name)
      return NextResponse.json({ success: true })
    }

    // Company: 同上
    if (company && isAscii(company) && hasLongWord(company, 15)) {
      console.log('Spam detected (Invalid Company):', company)
      return NextResponse.json({ success: true })
    }

    // Message: 检查是否有超过 30 个字符的超长单词
    if (message && isAscii(message) && hasLongWord(message, 30)) {
       console.log('Spam detected (Invalid Message):', message)
       return NextResponse.json({ success: true })
    }

    if (!process.env.NOTION_API_KEY || !process.env.NOTION_DATABASE_ID) {
      console.error('环境变量未设置')
      throw new Error('服务器配置错误')
    }

    const notion = new Client({
      auth: process.env.NOTION_API_KEY,
    })

    await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID!,
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: name
              }
            }
          ]
        },
        Email: {
          email: email
        },
        Company: {
          rich_text: company ? [
            {
              text: {
                content: company
              }
            }
          ] : []
        },
        Phone: {
          phone_number: phone || null  // 关键修改：空字符串转为 null
        },
        Message: {
          rich_text: [
            {
              text: {
                content: message
              }
            }
          ]
        },
        Status: {
          status: {
            name: '未跟进',
          },
        },
        Language: {
          select: {
            name: lang || 'English'  // 提供默认值
          }
        }
      }
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    // 详细的错误日志
    console.error('Notion API 错误:', {
      error,
      message: error instanceof Error ? error.message : '未知错误',
      stack: error instanceof Error ? error.stack : undefined
    })

    return NextResponse.json(
      { 
        error: error instanceof Error ? error.message : 'Failed to submit form',
        details: process.env.NODE_ENV === 'development' ? error : undefined
      },
      { status: 500 }
    )
  }
}