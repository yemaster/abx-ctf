# Abx::CTF Overview

## 架构

### 前端

- Vue3

### 后端

- 框架：Fastify
- 数据库：Postgresql

## 模块设计

### 公告新闻 News

- Keys
  **id**: Number
  **creator**: User
  **title**: String
  **content**: String
  **date**: Datetime

### 题目信息 Problem

- Keys
  **id**: Number
  **creator**: User


### 比赛题目 ContestProblem

- Keys:
  **id**: Number
  **problem**: Problem
  **OriginalScore**: Number = 500
  **MinScoreRate**: Number = 0.25
  **Difficulty**: Number = 5.0

  **Instances**: Instance[]

### 比赛信息 Contest

- Keys:
  **id**: Number
  **Title**: String
  **Hidden**: Boolean
  **Poster**: String
  **Summary**: String
  **Content**: String

  **StartTime**: Datetime
  **EndTime**: Datetime
  **WriteupDDL**: Datetime
  **WriteupNote**: String

  **Public Key**: String
  **Private Key**: String
  **TeamHashSalt**: String
  
  **AcceptWithoutReview**: Boolean
  **WriteupRequired**: Boolean
  **InviteCode**: String

  **Groups**: String[]
  **MemberCountLimit**: Number
  **ContainerCountLimit**: Number

  **BloodBonus**: [Number, Number, Number]

  **GameNotices**: GameNotices[]
  **GameProblems**: ContestProblems[]
  **SubmissionRecords**: ?[]
  **GameParticipants**: Team[]

### 用户信息 User

### 队伍信息 Team

### 容器信息 Instance

### 设置信息 Setting

- Keys
  **ConfigKey**: String
  **Value**: String

### 操作日志 Log