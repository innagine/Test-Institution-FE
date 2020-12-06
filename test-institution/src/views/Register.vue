<template>
  <div class="content">
    <div class="register">
      <el-card class="box-card">
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="0px"
          class="demo-ruleForm"
        >
          <el-form-item prop="userId">
            <el-input v-model="ruleForm.userId" placeholder="请输入ID"
            maxlength="30"
            show-word-limit
            @keyup.native="$event.target.value = $event.target.value.replace(/^\s+|\s+$/gm,'')"></el-input>
          </el-form-item>
          <el-form-item  prop="userName">
            <el-input
              v-model="ruleForm.userName"
              maxlength="30"
              show-word-limit
              placeholder="请输入用户名"
              @keyup.native="$event.target.value = $event.target.value.replace(/^\s+|\s+$/gm,'')"
            ></el-input>
          </el-form-item>
          <el-form-item prop="email" >
            <el-input v-model="ruleForm.email" placeholder="请输入邮箱"
            @keyup.native="$event.target.value = $event.target.value.replace(/^\s+|\s+$/gm,'')"
            maxlength="30"
            show-word-limit></el-input>
          </el-form-item>
          <el-form-item  prop="pass">
            <el-input
              type="password"
              v-model="ruleForm.pass"
              autocomplete="off"
              show-password
              maxlength="30"
              show-word-limit
              placeholder="请输入密码"
              @keyup.native="$event.target.value = $event.target.value.replace(/^\s+|\s+$/gm,'')"
            ></el-input>
          </el-form-item>
          <el-form-item  prop="checkPass">
            <el-input
              type="password"
              v-model="ruleForm.checkPass"
              autocomplete="off"
              show-password
              maxlength="30"
              show-word-limit
              placeholder="请确认密码"
              @keyup.native="$event.target.value = $event.target.value.replace(/^\s+|\s+$/gm,'')"
            ></el-input>
          </el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')" class="btn">注册</el-button>
            <el-button type="primary" @click="login" class="btn">返回登陆</el-button>
        </el-form>
      </el-card>
    </div>
    <svg  class="SVG1" width="211px" height="303px" viewBox="0 0 211 303" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 57.1 (83088) - https://sketch.com -->
    <title>数据存储器2</title>
    <desc>Created with Sketch.</desc>
    <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
            <stop stop-color="#0088FF" stop-opacity="0" offset="0%"></stop>
            <stop stop-color="#0088FF" offset="100%"></stop>
        </linearGradient>
        <polygon id="path-2" points="107.46015 3.6 143.4 39.120603 107.819549 75 35.5804511 75 -1.01493813e-13 39.120603 35.5804511 3.6"></polygon>
        <filter x="-15.2%" y="-29.4%" width="130.4%" height="158.8%" filterUnits="objectBoundingBox" id="filter-3">
            <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"></feMorphology>
            <feOffset dx="0" dy="0" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="6" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></feComposite>
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
        <radialGradient cx="50%" cy="40.3462626%" fx="50%" fy="40.3462626%" r="62.4097048%" gradientTransform="translate(0.500000,0.403463),scale(0.498747,1.000000),rotate(90.000000),scale(1.000000,2.432269),translate(-0.500000,-0.403463)" id="radialGradient-4">
            <stop stop-color="#0088FF" offset="0%"></stop>
            <stop stop-color="#0088FF" stop-opacity="0.35" offset="47.5624332%"></stop>
            <stop stop-color="#0088FF" stop-opacity="0" offset="100%"></stop>
        </radialGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-5">
            <stop stop-color="#0088FF" stop-opacity="0" offset="0%"></stop>
            <stop stop-color="#0088FF" offset="100%"></stop>
        </linearGradient>
        <polygon id="path-6" points="101.7 9.6 131.7 39.3 102 69.3 41.7 69.3 12 39.3 41.7 9.6"></polygon>
        <filter x="-41.7%" y="-72.9%" width="183.4%" height="265.8%" filterUnits="objectBoundingBox" id="filter-7">
            <feMorphology radius="0.5" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"></feMorphology>
            <feOffset dx="0" dy="6" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="15" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></feComposite>
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0.525490196   0 0 0 0 0.992156863  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
        <radialGradient cx="50%" cy="40.3462626%" fx="50%" fy="40.3462626%" r="62.4097048%" gradientTransform="translate(0.500000,0.403463),scale(0.498747,1.000000),rotate(90.000000),scale(1.000000,2.432269),translate(-0.500000,-0.403463)" id="radialGradient-8">
            <stop stop-color="#0088FF" stop-opacity="0" offset="0%"></stop>
            <stop stop-color="#0088FF" stop-opacity="0.35" offset="52.4375668%"></stop>
            <stop stop-color="#0088FF" offset="100%"></stop>
        </radialGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="136.312421%" id="linearGradient-9">
            <stop stop-color="#FFFFFF" stop-opacity="0" offset="0%"></stop>
            <stop stop-color="#FFFFFF" stop-opacity="0.5" offset="100%"></stop>
        </linearGradient>
        <radialGradient cx="50%" cy="18.6123935%" fx="50%" fy="18.6123935%" r="124.925924%" gradientTransform="translate(0.500000,0.186124),scale(0.330827,1.000000),rotate(91.041059),scale(1.000000,2.432269),translate(-0.500000,-0.186124)" id="radialGradient-10">
            <stop stop-color="#0088FF" offset="0%"></stop>
            <stop stop-color="#0088FF" stop-opacity="0" offset="100%"></stop>
        </radialGradient>
        <linearGradient x1="104.766503%" y1="38.9220506%" x2="24.1068294%" y2="62.5%" id="linearGradient-11">
            <stop stop-color="#F95738" offset="0%"></stop>
            <stop stop-color="#0088FF" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-12">
            <stop stop-color="#FFFFFF" stop-opacity="0" offset="0%"></stop>
            <stop stop-color="#FFFFFF" stop-opacity="0.4" offset="100%"></stop>
        </linearGradient>
        <polygon id="path-13" points="98.6330827 1.8 125.4 28.3658291 98.9007519 55.2 45.0992481 55.2 18.6 28.3658291 45.0992481 1.8"></polygon>
        <filter x="-3.3%" y="-4.7%" width="106.6%" height="113.1%" filterUnits="objectBoundingBox" id="filter-14">
            <feOffset dx="0" dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></feComposite>
            <feColorMatrix values="0 0 0 0 0.117647059   0 0 0 0 0.156862745   0 0 0 0 0.28627451  0 0 0 0.1 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
        <linearGradient x1="50%" y1="-118.504607%" x2="50%" y2="213.864683%" id="linearGradient-15">
            <stop stop-color="#0088FF" offset="0%"></stop>
            <stop stop-color="#1E2849" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="-118.504607%" x2="50%" y2="213.864683%" id="linearGradient-16">
            <stop stop-color="#0088FF" offset="0%"></stop>
            <stop stop-color="#1E2849" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="130.217634%" id="linearGradient-17">
            <stop stop-color="#FFFFFF" stop-opacity="0.2" offset="0%"></stop>
            <stop stop-color="#FFFFFF" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="22.0505937%" x2="50%" y2="127.877512%" id="linearGradient-18">
            <stop stop-color="#0088FE" stop-opacity="0" offset="0%"></stop>
            <stop stop-color="#0088FF" stop-opacity="0.6" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="22.0505937%" x2="50%" y2="127.877512%" id="linearGradient-19">
            <stop stop-color="#0088FE" stop-opacity="0" offset="0%"></stop>
            <stop stop-color="#0088FF" stop-opacity="0.6" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-20">
            <stop stop-color="#0088FF" stop-opacity="0.6" offset="0%"></stop>
            <stop stop-color="#0088FF" stop-opacity="0.1" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="10.4938272%" y1="34.0538873%" x2="106.927746%" y2="73.3106147%" id="linearGradient-21">
            <stop stop-color="#0088FE" stop-opacity="0.5" offset="0%"></stop>
            <stop stop-color="#0088FD" stop-opacity="0" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="10.476645%" y1="34.0538873%" x2="106.952506%" y2="73.3106147%" id="linearGradient-22">
            <stop stop-color="#0088FE" stop-opacity="0.5" offset="0%"></stop>
            <stop stop-color="#0088FD" stop-opacity="0" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="10.4681469%" y1="34.0538873%" x2="106.964751%" y2="73.3106147%" id="linearGradient-23">
            <stop stop-color="#0088FE" stop-opacity="0.5" offset="0%"></stop>
            <stop stop-color="#0088FD" stop-opacity="0" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="10.5000717%" y1="34.0538873%" x2="106.918748%" y2="73.3106147%" id="linearGradient-24">
            <stop stop-color="#0088FE" stop-opacity="0.5" offset="0%"></stop>
            <stop stop-color="#0088FD" stop-opacity="0" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="-52.6534598%" x2="50%" y2="100%" id="linearGradient-25">
            <stop stop-color="#0088FE" offset="0%"></stop>
            <stop stop-color="#0088FD" stop-opacity="0" offset="100%"></stop>
        </linearGradient>
        <radialGradient cx="50%" cy="55.1807424%" fx="50%" fy="55.1807424%" r="63.3623168%" gradientTransform="translate(0.500000,0.551807),scale(0.715910,1.000000),rotate(90.000000),scale(1.000000,1.534642),translate(-0.500000,-0.551807)" id="radialGradient-26">
            <stop stop-color="#0088FE" offset="0%"></stop>
            <stop stop-color="#0088FE" stop-opacity="0" offset="100%"></stop>
        </radialGradient>
        <linearGradient x1="-1.11022302e-14%" y1="50%" x2="100%" y2="50%" id="linearGradient-27">
            <stop stop-color="#0088FF" stop-opacity="0.6" offset="0%"></stop>
            <stop stop-color="#0088FF" stop-opacity="0.1" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-28">
            <stop stop-color="#FFFFFF" stop-opacity="0.3" offset="0%"></stop>
            <stop stop-color="#0088FF" stop-opacity="0.2" offset="100%"></stop>
        </linearGradient>
        <path d="M1.9776001,3.53704868 C2.52988485,3.74866784 2.9776001,3.27109775 2.9776001,2.47036602 C2.9776001,1.66963429 2.52988485,0.848961746 1.9776001,0.637342582 C1.42531535,0.425723419 0.977600098,0.903293511 0.977600098,1.70402524 C0.977600098,2.50475697 1.42531535,3.32542951 1.9776001,3.53704868 Z" id="path-29"></path>
        <filter x="-150.0%" y="-100.0%" width="400.0%" height="300.0%" filterUnits="objectBoundingBox" id="filter-30">
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 1   0 0 0 0 0.473565257   0 0 0 0 0.372827744  0 0 0 1 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
        <path d="M1.97259521,3.97827182 C2.52487996,4.18989099 2.97259521,3.71232089 2.97259521,2.91158917 C2.97259521,2.11085744 2.52487996,1.29018489 1.97259521,1.07856573 C1.42031047,0.866946563 0.972595215,1.34451666 0.972595215,2.14524838 C0.972595215,2.94598011 1.42031047,3.76665266 1.97259521,3.97827182 Z" id="path-31"></path>
        <filter x="-150.0%" y="-100.0%" width="400.0%" height="300.0%" filterUnits="objectBoundingBox" id="filter-32">
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 1   0 0 0 0 0.473565257   0 0 0 0 0.372827744  0 0 0 1 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
        <path d="M1.97741699,3.62518344 C2.52970174,3.83680261 2.97741699,3.35923251 2.97741699,2.55850079 C2.97741699,1.75776906 2.52970174,0.937096512 1.97741699,0.725477348 C1.42513224,0.513858184 0.977416992,0.991428276 0.977416992,1.79216 C0.977416992,2.59289173 1.42513224,3.41356428 1.97741699,3.62518344 Z" id="path-33"></path>
        <filter x="-150.0%" y="-100.0%" width="400.0%" height="300.0%" filterUnits="objectBoundingBox" id="filter-34">
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 1   0 0 0 0 0.473565257   0 0 0 0 0.372827744  0 0 0 1 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
        <path d="M1.9776001,4.28955112 C2.52988485,4.50117028 2.9776001,4.02360019 2.9776001,3.22286846 C2.9776001,2.42213674 2.52988485,1.60146419 1.9776001,1.38984502 C1.42531535,1.17822586 0.977600098,1.65579595 0.977600098,2.45652768 C0.977600098,3.25725941 1.42531535,4.07793195 1.9776001,4.28955112 Z" id="path-35"></path>
        <filter x="-150.0%" y="-100.0%" width="400.0%" height="300.0%" filterUnits="objectBoundingBox" id="filter-36">
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 1   0 0 0 0 0.473565257   0 0 0 0 0.372827744  0 0 0 1 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
        <path d="M1.97790527,3.9364017 C2.53019002,4.14802087 2.97790527,3.67045078 2.97790527,2.86971905 C2.97790527,2.06898732 2.53019002,1.24831477 1.97790527,1.03669561 C1.42562052,0.825076446 0.977905273,1.30264654 0.977905273,2.10337827 C0.977905273,2.90410999 1.42562052,3.72478254 1.97790527,3.9364017 Z" id="path-37"></path>
        <filter x="-150.0%" y="-100.0%" width="400.0%" height="300.0%" filterUnits="objectBoundingBox" id="filter-38">
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 1   0 0 0 0 0.473565257   0 0 0 0 0.372827744  0 0 0 1 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
        <path d="M0.798468018,8.03458761 C1.23944973,8.18054665 1.59693604,7.85115459 1.59693604,7.29886984 C1.59693604,6.74658509 1.23944973,6.18054665 0.798468018,6.03458761 C0.357486308,5.88862857 2.84217094e-14,6.21802063 2.84217094e-14,6.77030538 C2.84217094e-14,7.32259013 0.357486308,7.88862857 0.798468018,8.03458761 Z" id="path-39"></path>
        <filter x="-187.9%" y="-145.0%" width="475.7%" height="390.0%" filterUnits="objectBoundingBox" id="filter-40">
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0.992156863   0 0 0 0 0.678431373   0 0 0 0 0.305882353  0 0 0 1 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
        <path d="M0.798468018,14.0345876 C1.23944973,14.1805467 1.59693604,13.8511546 1.59693604,13.2988698 C1.59693604,12.7465851 1.23944973,12.1805467 0.798468018,12.0345876 C0.357486308,11.8886286 2.81996648e-14,12.2180206 2.81996648e-14,12.7703054 C2.81996648e-14,13.3225901 0.357486308,13.8886286 0.798468018,14.0345876 Z" id="path-41"></path>
        <filter x="-187.9%" y="-145.0%" width="475.7%" height="390.0%" filterUnits="objectBoundingBox" id="filter-42">
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0.992156863   0 0 0 0 0.678431373   0 0 0 0 0.305882353  0 0 0 1 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
        <path d="M4,49.9164217 C5.1045695,50.2691204 6,49.4731702 6,48.1386173 C6,46.8040644 5.1045695,45.4362769 4,45.0835783 C2.8954305,44.7308796 2,45.5268298 2,46.8613827 C2,48.1959356 2.8954305,49.5637231 4,49.9164217 Z" id="path-43"></path>
        <filter x="-187.5%" y="-150.0%" width="475.0%" height="400.0%" filterUnits="objectBoundingBox" id="filter-44">
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="2.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0.992156863   0 0 0 0 0.678431373   0 0 0 0 0.305882353  0 0 0 1 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
        <path d="M19,55.9164217 C20.1045695,56.2691204 21,55.4731702 21,54.1386173 C21,52.8040644 20.1045695,51.4362769 19,51.0835783 C17.8954305,50.7308796 17,51.5268298 17,52.8613827 C17,54.1959356 17.8954305,55.5637231 19,55.9164217 Z" id="path-45"></path>
        <filter x="-187.5%" y="-150.0%" width="475.0%" height="400.0%" filterUnits="objectBoundingBox" id="filter-46">
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="2.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0.992156863   0 0 0 0 0.678431373   0 0 0 0 0.305882353  0 0 0 1 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
        <path d="M33,61.9164217 C34.1045695,62.2691204 35,61.4731702 35,60.1386173 C35,58.8040644 34.1045695,57.4362769 33,57.0835783 C31.8954305,56.7308796 31,57.5268298 31,58.8613827 C31,60.1959356 31.8954305,61.5637231 33,61.9164217 Z" id="path-47"></path>
        <filter x="-187.5%" y="-150.0%" width="475.0%" height="400.0%" filterUnits="objectBoundingBox" id="filter-48">
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="2.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0.992156863   0 0 0 0 0.678431373   0 0 0 0 0.305882353  0 0 0 1 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
        <path d="M47,66.9164217 C48.1045695,67.2691204 49,66.4731702 49,65.1386173 C49,63.8040644 48.1045695,62.4362769 47,62.0835783 C45.8954305,61.7308796 45,62.5268298 45,63.8613827 C45,65.1959356 45.8954305,66.5637231 47,66.9164217 Z" id="path-49"></path>
        <filter x="-187.5%" y="-150.0%" width="475.0%" height="400.0%" filterUnits="objectBoundingBox" id="filter-50">
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="2.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0.992156863   0 0 0 0 0.678431373   0 0 0 0 0.305882353  0 0 0 1 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
        <path d="M61,72.9164217 C62.1045695,73.2691204 63,72.4731702 63,71.1386173 C63,69.8040644 62.1045695,68.4362769 61,68.0835783 C59.8954305,67.7308796 59,68.5268298 59,69.8613827 C59,71.1959356 59.8954305,72.5637231 61,72.9164217 Z" id="path-51"></path>
        <filter x="-187.5%" y="-150.0%" width="475.0%" height="400.0%" filterUnits="objectBoundingBox" id="filter-52">
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="2.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0.992156863   0 0 0 0 0.678431373   0 0 0 0 0.305882353  0 0 0 1 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
        <path d="M0.798468018,2.03458761 C1.23944973,2.18054665 1.59693604,1.85115459 1.59693604,1.29886984 C1.59693604,0.746585087 1.23944973,0.180546654 0.798468018,0.0345876106 C0.357486308,-0.111371433 2.81996648e-14,0.218020634 2.81996648e-14,0.770305384 C2.81996648e-14,1.32259013 0.357486308,1.88862857 0.798468018,2.03458761 Z" id="path-53"></path>
        <filter x="-187.9%" y="-145.0%" width="475.7%" height="390.0%" filterUnits="objectBoundingBox" id="filter-54">
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0.992156863   0 0 0 0 0.678431373   0 0 0 0 0.305882353  0 0 0 1 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
        <linearGradient x1="126.370133%" y1="45.585898%" x2="0%" y2="45.585898%" id="linearGradient-55">
            <stop stop-color="#F95738" offset="0%"></stop>
            <stop stop-color="#0088FF" stop-opacity="0.8" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="41.0797817%" x2="49.1496627%" y2="71.3797669%" id="linearGradient-56">
            <stop stop-color="#0088FF" stop-opacity="0" offset="0%"></stop>
            <stop stop-color="#FFFFFF" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="-29.4685475%" y1="56.5384321%" x2="109.414601%" y2="39.3583581%" id="linearGradient-57">
            <stop stop-color="#1E2849" offset="0%"></stop>
            <stop stop-color="#0088FF" stop-opacity="0.8" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="218.455189%" y1="43.5742257%" x2="-64.5489387%" y2="56.4257743%" id="linearGradient-58">
            <stop stop-color="#F95738" offset="0%"></stop>
            <stop stop-color="#0088FF" stop-opacity="0.8" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="51.2822012%" y1="93.0657884%" x2="48.7177988%" y2="7.1789775%" id="linearGradient-59">
            <stop stop-color="#0088FF" stop-opacity="0.1" offset="0%"></stop>
            <stop stop-color="#0088FF" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="55.9616255%" y1="50%" x2="37.3322394%" y2="13.5266357%" id="linearGradient-60">
            <stop stop-color="#0088FF" stop-opacity="0" offset="0%"></stop>
            <stop stop-color="#FFFFFF" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="143.844039%" y1="38.2415622%" x2="0%" y2="38.2415622%" id="linearGradient-61">
            <stop stop-color="#F95738" offset="0%"></stop>
            <stop stop-color="#0088FF" stop-opacity="0.8" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="41.2187519%" x2="49.1496627%" y2="71.0466864%" id="linearGradient-62">
            <stop stop-color="#0088FF" stop-opacity="0" offset="0%"></stop>
            <stop stop-color="#FFFFFF" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="53.9999694%" y1="100%" x2="46.0000306%" y2="5.31625566%" id="linearGradient-63">
            <stop stop-color="#0088FF" stop-opacity="0.1" offset="0%"></stop>
            <stop stop-color="#0088FF" stop-opacity="0.8" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="39.5510291%" y1="43.6865765%" x2="65.9068475%" y2="6.59865979%" id="linearGradient-64">
            <stop stop-color="#0088FF" stop-opacity="0" offset="0%"></stop>
            <stop stop-color="#FFFFFF" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="99.8838682%" id="linearGradient-65">
            <stop stop-color="#0088FE" stop-opacity="0" offset="0%"></stop>
            <stop stop-color="#0088FF" stop-opacity="0.2" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="150.633094%" id="linearGradient-66">
            <stop stop-color="#0088FE" stop-opacity="0" offset="0%"></stop>
            <stop stop-color="#0088FF" stop-opacity="0.6" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="数据存储器2" transform="translate(1.000000, 1.000000)">
            <g id="底座" transform="translate(32.000000, 196.000000)">
                <g id="矩形备份">
                    <use fill="black" fill-opacity="1" filter="url(#filter-3)" xlink:href="#path-2"></use>
                    <path stroke="url(#linearGradient-1)" stroke-width="0.5" d="M107.357455,3.85 L35.6838813,3.85 L0.352963028,39.1214899 L35.6846177,74.75 L107.715382,74.75 L143.046153,39.1223811 L107.357455,3.85 Z" stroke-linejoin="square" fill-opacity="0.1" fill="#0188FE" fill-rule="evenodd"></path>
                </g>
                <g id="矩形备份">
                    <use fill="black" fill-opacity="1" filter="url(#filter-7)" xlink:href="#path-6"></use>
                    <path stroke="url(#linearGradient-5)" stroke-width="0.6" d="M101.576618,9.9 L41.8242641,9.9 L12.4232008,39.3010633 L41.8251481,69 L101.874852,69 L131.275741,39.302132 L101.576618,9.9 Z" stroke-linejoin="square" fill="url(#radialGradient-4)" fill-rule="evenodd"></path>
                </g>
                <path d="M101.576618,0.3 L41.8242641,0.3 L12.4232008,29.7010633 L41.8251481,59.4 L101.874852,59.4 L131.275741,29.702132 L101.576618,0.3 Z" id="矩形" stroke="url(#linearGradient-9)" stroke-width="0.6" fill="url(#radialGradient-8)"></path>
                <polygon id="矩形" fill="url(#radialGradient-10)" points="101.7 69.3 131.7 39.45 131.7 29.7 102 59.7 41.7 59.7 12 29.7 12 39.45 41.7 69.3"></polygon>
                <g id="矩形备份-2">
                    <use fill="black" fill-opacity="1" filter="url(#filter-14)" xlink:href="#path-13"></use>
                    <path stroke="url(#linearGradient-12)" stroke-width="0.6" d="M98.5094807,2.1 L45.2237327,2.1 L19.0226734,28.3668911 L45.2246172,54.9 L98.7753828,54.9 L124.976273,28.3679584 L98.5094807,2.1 Z" stroke-linejoin="square" fill="url(#linearGradient-11)" fill-rule="evenodd"></path>
                </g>
                <path d="M95.2177514,3.9 L48.5485448,3.9 L25.6226734,26.883474 L48.5494292,50.1 L95.4505708,50.1 L118.376273,26.8845413 L95.2177514,3.9 Z" id="矩形备份-2" stroke="url(#linearGradient-15)" stroke-width="0.6"></path>
                <path d="M91.626774,6.9 L52.1756124,6.9 L32.8226734,26.3015645 L52.1764969,45.9 L91.8235031,45.9 L111.176273,26.3026318 L91.626774,6.9 Z" id="矩形备份-2" stroke="url(#linearGradient-16)" stroke-width="0.6"></path>
                <path d="M78.1606085,19.5 L65.7771162,19.5 L59.8226734,25.4694037 L65.7780007,31.5 L78.2219993,31.5 L84.1762726,25.470471 L78.1606085,19.5 Z" id="矩形备份-2" stroke="url(#linearGradient-17)" stroke-width="0.6"></path>
            </g>
            <g id="底座发光2" transform="translate(72.000000, 169.000000)">
                <polygon id="路径" fill="url(#linearGradient-18)" points="19.7851868 52.0454774 1.11138876e-13 -3.12800372e-13 61.2 -3.12800372e-13 43.1859192 52.0454774 37.5549866 46.4067078 25.3715149 46.4067078"></polygon>
                <polygon id="路径" fill="url(#linearGradient-19)" points="19.7851868 52.0454774 4.67126338e-14 2.48689958e-13 61.2 2.48689958e-13 43.1860657 52.0759461 37.5424622 57.7679627 25.5026839 57.7679627"></polygon>
            </g>
            <g id="存储器" transform="translate(9.494992, 10.000000)">
                <g id="后面" transform="translate(0.014251, 1.000144)">
                    <polygon id="矩形" fill="url(#linearGradient-20)" opacity="0.2" points="89.9907565 0.293099251 99.9907565 0.293099251 99.9907565 100.293099 89.9907565 100.293099"></polygon>
                    <polygon id="矩形" stroke-opacity="0.2" stroke="#0088FE" fill-opacity="0.1" fill="#0088FF" points="0.0181103848 32.1393079 89.9637915 -1.28126652e-13 100.027087 0.172584981 190.000448 32.1614383 190.022929 131.98629 94.9907565 94.695443 6.76510086e-16 131.970038"></polygon>
                </g>
                <g id="中部" transform="translate(9.005008, 47.293244)">
                    <g id="编组-4" transform="translate(0.000000, -0.000000)">
                        <polygon id="矩形备份-12" fill-opacity="0.4" fill="#0088FF" opacity="0.2" points="80 0 90 4 90 64 80 60"></polygon>
                        <polygon id="矩形" fill-opacity="0.5" fill="url(#linearGradient-21)" points="8.01298962 26.9951289 80 2.27373675e-13 80 60 0 90 0 40.0185547"></polygon>
                        <polygon id="矩形" fill-opacity="0.5" fill="url(#linearGradient-21)" points="17.9964148 31.0013444 90 4 90 64 10 94 10 44.0284424"></polygon>
                        <polygon id="矩形备份-12" fill="#0088FF" points="0 40 10 44 10 94 0 90"></polygon>
                    </g>
                    <g id="编组-5" transform="translate(14.000000, 5.452454)">
                        <polygon id="矩形备份-13" fill-opacity="0.4" fill="#0088FF" opacity="0.2" points="80.017395 0 90.017395 4 90.017395 64 80.017395 60"></polygon>
                        <polygon id="矩形" fill-opacity="0.5" fill="url(#linearGradient-22)" points="7.98782501 26.9731855 80.017395 0 80.017395 60 0 90 0 39.9963989"></polygon>
                        <polygon id="矩形" fill-opacity="0.5" fill="url(#linearGradient-22)" points="17.9928995 30.9712852 90.017395 4 90.017395 64 10 94 10 44.0585327"></polygon>
                        <polygon id="矩形备份-13" fill="#0088FF" points="0.0173950195 40 10.017395 44 10.017395 94 0.0173950195 90"></polygon>
                    </g>
                    <g id="编组-6" transform="translate(27.999817, 11.104340)">
                        <polygon id="矩形备份-14" fill-opacity="0.4" fill="#0088FF" opacity="0.2" points="80 0 90 4 90 64 80 60"></polygon>
                        <polygon id="矩形" fill-opacity="0.5" fill="url(#linearGradient-23)" points="8.02564505 26.9920763 80.0175781 0.00967407227 80.0175781 60 -9.87148731e-14 90 0.000183105469 40.0117493"></polygon>
                        <polygon id="矩形" fill-opacity="0.5" fill="url(#linearGradient-23)" points="17.9641449 31.0151264 90.0175781 4.00967407 90.0175781 64 10 94 10.0001831 43.9270325"></polygon>
                        <polygon id="矩形备份-14" fill="#0088FF" points="0 40 10 44 10 94 0 90"></polygon>
                    </g>
                    <g id="编组-7" transform="translate(42.000000, 15.775787)">
                        <polygon id="矩形备份-15" fill-opacity="0.5" fill="#0088FF" opacity="0.2" points="80.0103455 1 90.0103455 5 90.0103455 65 80.0103455 61"></polygon>
                        <polygon id="矩形" fill-opacity="0.5" fill="url(#linearGradient-24)" points="8.08383077 27.9711916 80.017395 0.984954834 80.017395 61 0.010345459 91 0.010345459 41"></polygon>
                        <polygon id="矩形" fill-opacity="0.5" fill="url(#linearGradient-24)" points="18.0164865 31.9964561 90.017395 4.98495483 90.017395 65 10.0103455 95 10.0103455 45.0061951"></polygon>
                        <polygon id="矩形备份-15" fill="#0088FF" points="0.010345459 41 10.0103455 45 10.0103455 95 0.010345459 91"></polygon>
                    </g>
                    <g id="编组" transform="translate(0.000305, 22.425720)">
                        <polygon id="矩形备份-16" fill-opacity="0.5" fill="#0088FF" opacity="0.2" points="136 0 146 4 146 64 136 60"></polygon>
                        <polygon id="矩形" fill-opacity="0.5" fill="url(#linearGradient-21)" points="63.9841141 27.0059572 136 -9.3614244e-14 136 60 56 90 56 40.0171509"></polygon>
                        <polygon id="矩形" fill-opacity="0.5" fill="url(#linearGradient-21)" points="73.9694389 31.0114604 146 4 146 64 66 94 66 44.0455933"></polygon>
                        <polygon id="矩形备份-16" fill="#0088FF" points="56 40 66 44 66 94 56 90"></polygon>
                        <polygon id="矩形备份-12" fill="#2A9CFF" opacity="0.5" points="7.99969482 4.57427979 17.9996948 8.57427979 9.99969482 21.5742798 -0.000305175781 17.5742798"></polygon>
                        <polygon id="矩形备份-13" fill="#2A9CFF" opacity="0.5" points="22.0170898 10.0267334 32.0170898 14.0267334 24.0170898 27.0267334 14.0170898 23.0267334"></polygon>
                        <polygon id="矩形备份-14" fill="#2A9CFF" opacity="0.5" points="35.9995117 15.6786194 45.9995117 19.6786194 37.9995117 32.6786194 27.9995117 28.6786194"></polygon>
                        <polygon id="矩形备份-15" fill="#2A9CFF" opacity="0.5" points="50.0100403 21.3500671 60.0100403 25.3500671 52.0100403 38.3500671 42.0100403 34.3500671"></polygon>
                        <polygon id="矩形备份-16" fill="#2A9CFF" opacity="0.5" points="64 27 74 31 66 44 56 40"></polygon>
                    </g>
                </g>
                <g id="前面" transform="translate(0.005008, 34.935822)">
                    <polygon id="矩形" stroke="url(#radialGradient-26)" fill="url(#linearGradient-25)" points="0.0190206982 1.02788715 89.0096203 36.983685 99.0291629 37.0082523 190.011717 0.975557553 190.036683 100.96567 99.0218083 137.011165 88.9908886 136.976117 0.0405109621 101.03657"></polygon>
                    <polygon id="矩形" fill="url(#linearGradient-27)" opacity="0.694707961" points="89 37.3574219 99 37.3574219 99 137.357422 89 137.357422"></polygon>
                    <path d="M98.5,37.5 L98.5,136.381714" id="直线-2" stroke="url(#linearGradient-28)" stroke-linecap="square"></path>
                    <path d="M88.5,37.5 L88.5,136.381714" id="直线-2" stroke="url(#linearGradient-28)" stroke-linecap="square"></path>
                </g>
                <g id="装饰圆点1" transform="translate(12.005008, 131.293244)">
                    <g id="编组-2">
                        <path d="M2,3.97814941 C2.82842712,4.2603083 3.5,3.62354818 3.5,2.55590587 C3.5,1.48826357 2.82842712,0.394033506 2,0.111874621 C1.17157288,-0.170284264 0.5,0.466475859 0.5,1.53411816 C0.5,2.60176047 1.17157288,3.69599053 2,3.97814941 Z" id="椭圆形备份-3" stroke-opacity="0.3" stroke="#1E2849" stroke-width="0.1" fill-opacity="0.2" fill="#1E2849"></path>
                        <g id="椭圆形备份-3">
                            <use fill="black" fill-opacity="1" filter="url(#filter-30)" xlink:href="#path-29"></use>
                            <use fill="#F95738" fill-rule="evenodd" xlink:href="#path-29"></use>
                        </g>
                    </g>
                    <g id="编组-2" transform="translate(14.000000, 5.000000)">
                        <path d="M1.99499512,4.41937256 C2.82342224,4.70153144 3.49499512,4.06477132 3.49499512,2.99712902 C3.49499512,1.92948671 2.82342224,0.835256651 1.99499512,0.553097766 C1.16656799,0.27093888 0.494995117,0.907699003 0.494995117,1.97534131 C0.494995117,3.04298361 1.16656799,4.13721367 1.99499512,4.41937256 Z" id="椭圆形备份-3" stroke-opacity="0.3" stroke="#1E2849" stroke-width="0.1" fill-opacity="0.2" fill="#1E2849"></path>
                        <g id="椭圆形备份-3">
                            <use fill="black" fill-opacity="1" filter="url(#filter-32)" xlink:href="#path-31"></use>
                            <use fill="#F95738" fill-rule="evenodd" xlink:href="#path-31"></use>
                        </g>
                    </g>
                    <g id="编组-2" transform="translate(28.000000, 11.000000)">
                        <path d="M1.99981689,4.06628418 C2.82824402,4.34844306 3.49981689,3.71168294 3.49981689,2.64404064 C3.49981689,1.57639834 2.82824402,0.482168272 1.99981689,0.200009387 C1.17138977,-0.0821494985 0.499816895,0.554610624 0.499816895,1.62225293 C0.499816895,2.68989523 1.17138977,3.78412529 1.99981689,4.06628418 Z" id="椭圆形备份-3" stroke-opacity="0.3" stroke="#1E2849" stroke-width="0.1" fill-opacity="0.2" fill="#1E2849"></path>
                        <g id="椭圆形备份-3">
                            <use fill="black" fill-opacity="1" filter="url(#filter-34)" xlink:href="#path-33"></use>
                            <use fill="#F95738" fill-rule="evenodd" xlink:href="#path-33"></use>
                        </g>
                    </g>
                    <g id="编组-2" transform="translate(42.000000, 16.000000)">
                        <path d="M2,4.73065186 C2.82842712,5.01281074 3.5,4.37605062 3.5,3.30840831 C3.5,2.24076601 2.82842712,1.14653595 2,0.864377062 C1.17157288,0.582218177 0.5,1.2189783 0.5,2.2866206 C0.5,3.35426291 1.17157288,4.44849297 2,4.73065186 Z" id="椭圆形备份-3" stroke-opacity="0.3" stroke="#1E2849" stroke-width="0.1" fill-opacity="0.2" fill="#1E2849"></path>
                        <g id="椭圆形备份-3">
                            <use fill="black" fill-opacity="1" filter="url(#filter-36)" xlink:href="#path-35"></use>
                            <use fill="#F95738" fill-rule="evenodd" xlink:href="#path-35"></use>
                        </g>
                    </g>
                    <g id="编组-2" transform="translate(56.000000, 22.000000)">
                        <path d="M2.00030518,4.37750244 C2.8287323,4.65966133 3.50030518,4.0229012 3.50030518,2.9552589 C3.50030518,1.8876166 2.8287323,0.793386533 2.00030518,0.511227648 C1.17187805,0.229068763 0.500305176,0.865828886 0.500305176,1.93347119 C0.500305176,3.00111349 1.17187805,4.09534356 2.00030518,4.37750244 Z" id="椭圆形备份-3" stroke-opacity="0.3" stroke="#1E2849" stroke-width="0.1" fill-opacity="0.2" fill="#1E2849"></path>
                        <g id="椭圆形备份-3">
                            <use fill="black" fill-opacity="1" filter="url(#filter-38)" xlink:href="#path-37"></use>
                            <use fill="#F95738" fill-rule="evenodd" xlink:href="#path-37"></use>
                        </g>
                    </g>
                </g>
                <g id="装饰圆点2" transform="translate(9.208072, 48.276966)">
                    <g id="椭圆形备份-3">
                        <use fill="black" fill-opacity="1" filter="url(#filter-40)" xlink:href="#path-39"></use>
                        <use fill="#FDAD4E" fill-rule="evenodd" xlink:href="#path-39"></use>
                    </g>
                    <path d="M4.18965107,6.57336308 L11.404221,9.45919105 C12.2453729,9.79565181 12.796936,10.6103287 12.796936,11.5162771 C12.796936,12.0771495 12.3422591,12.5318265 11.7813866,12.5318265 C11.652189,12.5318265 11.524178,12.5071738 11.404221,12.459191 L4.18965107,9.57336308 C3.34849916,9.23690231 2.79693604,8.4222254 2.79693604,7.51627706 C2.79693604,6.95540459 3.25161301,6.50072762 3.81248548,6.50072762 C3.9416831,6.50072762 4.06969409,6.52538029 4.18965107,6.57336308 Z" id="矩形备份-12" fill="#0088FF"></path>
                    <g id="椭圆形备份-3">
                        <use fill="black" fill-opacity="1" filter="url(#filter-42)" xlink:href="#path-41"></use>
                        <use fill="#FDAD4E" fill-rule="evenodd" xlink:href="#path-41"></use>
                    </g>
                    <g id="椭圆形备份-3">
                        <use fill="black" fill-opacity="1" filter="url(#filter-44)" xlink:href="#path-43"></use>
                        <use fill="#FDAD4E" fill-rule="evenodd" xlink:href="#path-43"></use>
                    </g>
                    <g id="椭圆形备份-3">
                        <use fill="black" fill-opacity="1" filter="url(#filter-46)" xlink:href="#path-45"></use>
                        <use fill="#FDAD4E" fill-rule="evenodd" xlink:href="#path-45"></use>
                    </g>
                    <g id="椭圆形备份-3">
                        <use fill="black" fill-opacity="1" filter="url(#filter-48)" xlink:href="#path-47"></use>
                        <use fill="#FDAD4E" fill-rule="evenodd" xlink:href="#path-47"></use>
                    </g>
                    <g id="椭圆形备份-3">
                        <use fill="black" fill-opacity="1" filter="url(#filter-50)" xlink:href="#path-49"></use>
                        <use fill="#FDAD4E" fill-rule="evenodd" xlink:href="#path-49"></use>
                    </g>
                    <g id="椭圆形备份-3">
                        <use fill="black" fill-opacity="1" filter="url(#filter-52)" xlink:href="#path-51"></use>
                        <use fill="#FDAD4E" fill-rule="evenodd" xlink:href="#path-51"></use>
                    </g>
                    <path d="M4.18965107,12.5733631 L11.404221,15.459191 C12.2453729,15.7956518 12.796936,16.6103287 12.796936,17.5162771 C12.796936,18.0771495 12.3422591,18.5318265 11.7813866,18.5318265 C11.652189,18.5318265 11.524178,18.5071738 11.404221,18.459191 L4.18965107,15.5733631 C3.34849916,15.2369023 2.79693604,14.4222254 2.79693604,13.5162771 C2.79693604,12.9554046 3.25161301,12.5007276 3.81248548,12.5007276 C3.9416831,12.5007276 4.06969409,12.5253803 4.18965107,12.5733631 Z" id="矩形备份-12" fill="#0088FF"></path>
                    <path d="M4.18965107,0.573363078 L11.404221,3.45919105 C12.2453729,3.79565181 12.796936,4.61032873 12.796936,5.51627706 C12.796936,6.07714953 12.3422591,6.53182651 11.7813866,6.53182651 C11.652189,6.53182651 11.524178,6.50717384 11.404221,6.45919105 L4.18965107,3.57336308 C3.34849916,3.23690231 2.79693604,2.4222254 2.79693604,1.51627706 C2.79693604,0.955404594 3.25161301,0.500727622 3.81248548,0.500727622 C3.9416831,0.500727622 4.06969409,0.525380286 4.18965107,0.573363078 Z" id="矩形备份-12" fill="#0088FF"></path>
                    <g id="椭圆形备份-3">
                        <use fill="black" fill-opacity="1" filter="url(#filter-54)" xlink:href="#path-53"></use>
                        <use fill="#FDAD4E" fill-rule="evenodd" xlink:href="#path-53"></use>
                    </g>
                </g>
                <g id="顶部">
                    <path d="M90.0612886,0.501359558 L0.532616336,32.4916623 L0.503154649,35.6393926 L89.1325428,71.8058878 L98.9405548,71.8184513 L189.507522,35.5960425 L189.514222,32.5143059 L99.9070507,0.655646667 L90.0612886,0.501359558 Z" id="路径-2" stroke="url(#linearGradient-56)" fill="url(#linearGradient-55)"></path>
                    <polygon id="矩形" fill="url(#linearGradient-57)" points="82.0053128 35.684601 130.005313 18.4153139 95.0050076 5.6700746 47.0050076 22.9393617"></polygon>
                    <polygon id="矩形" fill="url(#linearGradient-58)" points="83.4905912 30.684601 115.005008 18.9815309 93.519424 11.684601 62.0050076 23.387671"></polygon>
                </g>
                <g id="侧边装饰条" transform="translate(90.005008, 22.548004)">
                    <g id="编组-3" transform="translate(-0.000000, 16.000000)">
                        <polygon id="矩形" fill="#0088FF" points="25.0003052 27.3913574 44 19.7452393 44 119.209412 25.0003052 126.74176"></polygon>
                        <polygon id="矩形" fill="#0088FF" opacity="0.2" points="25.0003052 126.74176 44.1471863 119.097687 54 123.954346 35.0003052 131.486694"></polygon>
                        <polygon id="矩形" fill="#0088FF" points="43.1226604 19.7842939 18.9996948 11 1.77635684e-14 18.6461182 25.0396477 27.7642187"></polygon>
                        <polygon id="矩形" stroke="url(#linearGradient-60)" fill="url(#linearGradient-59)" stroke-linejoin="bevel" points="35.0003052 20.3913574 54 12.7452393 54 123.745239 35.0003052 131.391357"></polygon>
                        <polygon id="矩形" stroke="url(#linearGradient-62)" fill="url(#linearGradient-61)" stroke-linejoin="bevel" points="35.0003052 20.3913574 54 12.7452393 18.9996948 -8.17124146e-14 1.77635684e-14 7.64611816"></polygon>
                        <polygon id="路径-3" stroke="url(#linearGradient-64)" fill="url(#linearGradient-63)" stroke-linejoin="bevel" points="0 7.64611816 0 19.2452393 25.0003052 27.7642187 25.0003052 126.391357 35.0003052 131.391357 35.0003052 20.3913574"></polygon>
                    </g>
                    <g id="编组-3" opacity="0.8" transform="translate(40.000000, 0.000000)">
                        <polygon id="矩形" fill="#0088FF" points="25.0003052 27.3913574 44 19.7452393 44 119.209412 25.0003052 126.74176"></polygon>
                        <polygon id="矩形" fill="#0088FF" opacity="0.2" points="25.0003052 126.74176 44.1471863 119.097687 54 123.954346 35.0003052 131.486694"></polygon>
                        <polygon id="矩形" fill="#0088FF" points="43.1226604 19.7842939 18.9996948 11 1.77635684e-14 18.6461182 25.0396477 27.7642187"></polygon>
                        <polygon id="矩形" stroke="url(#linearGradient-60)" fill="url(#linearGradient-59)" stroke-linejoin="bevel" points="35.0003052 20.3913574 54 12.7452393 54 123.745239 35.0003052 131.391357"></polygon>
                        <polygon id="矩形" stroke="url(#linearGradient-62)" fill="url(#linearGradient-61)" stroke-linejoin="bevel" points="35.0003052 20.3913574 54 12.7452393 18.9996948 -8.17124146e-14 1.77635684e-14 7.64611816"></polygon>
                        <polygon id="路径-3" stroke="url(#linearGradient-64)" fill="url(#linearGradient-63)" stroke-linejoin="bevel" points="0 7.64611816 0 19.2452393 25.0003052 27.7642187 25.0003052 126.391357 35.0003052 131.391357 35.0003052 20.3913574"></polygon>
                    </g>
                </g>
            </g>
            <g id="底座发光1" transform="translate(13.000000, 139.000000)">
                <polygon id="路径" fill="url(#linearGradient-65)" points="36.9 84.4962979 0 4.26325641e-14 180 4.26325641e-14 143.7 84.4962979 117.200752 57.9304688 63.3992481 57.9304688"></polygon>
                <polygon id="路径" fill="url(#linearGradient-66)" points="37.2 84.8267666 0.3 0.33046875 180.3 0.33046875 143.7 84.4962979 117.200752 111.330469 63.3992481 111.330469"></polygon>
            </g>
            <g id="装饰线" stroke="#F95738">
                <polyline id="路径" points="0 50 0 37 9 33"></polyline>
                <polyline id="路径备份-2" transform="translate(204.500000, 41.500000) scale(-1, 1) translate(-204.500000, -41.500000) " points="200 50 200 37 209 33"></polyline>
                <polyline id="路径备份" transform="translate(104.483215, 1.480713) scale(-1, 1) translate(-104.483215, -1.480713) " points="90.9949951 2.96142578 99.9664307 1.70669034e-13 109.966431 6.73350264e-13 117.971436 2.96142578"></polyline>
            </g>
        </g>
    </g>
</svg>
<svg  class="SVG2" width="191px" height="303px" viewBox="0 0 191 303" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 57.1 (83088) - https://sketch.com -->
    <title>数据源网关</title>
    <desc>Created with Sketch.</desc>
    <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
            <stop stop-color="#0088FF" stop-opacity="0" offset="0%"></stop>
            <stop stop-color="#0088FF" offset="100%"></stop>
        </linearGradient>
        <polygon id="path-2" points="107.46015 3.6 143.4 39.120603 107.819549 75 35.5804511 75 -1.01493813e-13 39.120603 35.5804511 3.6"></polygon>
        <filter x="-15.2%" y="-29.4%" width="130.4%" height="158.8%" filterUnits="objectBoundingBox" id="filter-3">
            <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"></feMorphology>
            <feOffset dx="0" dy="0" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="6" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></feComposite>
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
        <radialGradient cx="50%" cy="40.3462626%" fx="50%" fy="40.3462626%" r="62.4097048%" gradientTransform="translate(0.500000,0.403463),scale(0.498747,1.000000),rotate(90.000000),scale(1.000000,2.432269),translate(-0.500000,-0.403463)" id="radialGradient-4">
            <stop stop-color="#0088FF" offset="0%"></stop>
            <stop stop-color="#0088FF" stop-opacity="0.35" offset="47.5624332%"></stop>
            <stop stop-color="#0088FF" stop-opacity="0" offset="100%"></stop>
        </radialGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-5">
            <stop stop-color="#0088FF" stop-opacity="0" offset="0%"></stop>
            <stop stop-color="#0088FF" offset="100%"></stop>
        </linearGradient>
        <polygon id="path-6" points="101.7 9.6 131.7 39.3 102 69.3 41.7 69.3 12 39.3 41.7 9.6"></polygon>
        <filter x="-41.7%" y="-72.9%" width="183.4%" height="265.8%" filterUnits="objectBoundingBox" id="filter-7">
            <feMorphology radius="0.5" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"></feMorphology>
            <feOffset dx="0" dy="6" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="15" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></feComposite>
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0.525490196   0 0 0 0 0.992156863  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
        <radialGradient cx="50%" cy="40.3462626%" fx="50%" fy="40.3462626%" r="62.4097048%" gradientTransform="translate(0.500000,0.403463),scale(0.498747,1.000000),rotate(90.000000),scale(1.000000,2.432269),translate(-0.500000,-0.403463)" id="radialGradient-8">
            <stop stop-color="#0088FF" stop-opacity="0" offset="0%"></stop>
            <stop stop-color="#0088FF" stop-opacity="0.35" offset="52.4375668%"></stop>
            <stop stop-color="#0088FF" offset="100%"></stop>
        </radialGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="136.312421%" id="linearGradient-9">
            <stop stop-color="#FFFFFF" stop-opacity="0" offset="0%"></stop>
            <stop stop-color="#FFFFFF" stop-opacity="0.5" offset="100%"></stop>
        </linearGradient>
        <radialGradient cx="50%" cy="18.6123935%" fx="50%" fy="18.6123935%" r="124.925924%" gradientTransform="translate(0.500000,0.186124),scale(0.330827,1.000000),rotate(91.041059),scale(1.000000,2.432269),translate(-0.500000,-0.186124)" id="radialGradient-10">
            <stop stop-color="#0088FF" offset="0%"></stop>
            <stop stop-color="#0088FF" stop-opacity="0" offset="100%"></stop>
        </radialGradient>
        <linearGradient x1="104.766503%" y1="38.9220506%" x2="24.1068294%" y2="62.5%" id="linearGradient-11">
            <stop stop-color="#F95738" offset="0%"></stop>
            <stop stop-color="#0088FF" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-12">
            <stop stop-color="#FFFFFF" stop-opacity="0" offset="0%"></stop>
            <stop stop-color="#FFFFFF" stop-opacity="0.4" offset="100%"></stop>
        </linearGradient>
        <polygon id="path-13" points="98.6330827 1.8 125.4 28.3658291 98.9007519 55.2 45.0992481 55.2 18.6 28.3658291 45.0992481 1.8"></polygon>
        <filter x="-3.3%" y="-4.7%" width="106.6%" height="113.1%" filterUnits="objectBoundingBox" id="filter-14">
            <feOffset dx="0" dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></feComposite>
            <feColorMatrix values="0 0 0 0 0.117647059   0 0 0 0 0.156862745   0 0 0 0 0.28627451  0 0 0 0.1 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
        <linearGradient x1="50%" y1="-118.504607%" x2="50%" y2="213.864683%" id="linearGradient-15">
            <stop stop-color="#0088FF" offset="0%"></stop>
            <stop stop-color="#1E2849" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="-118.504607%" x2="50%" y2="213.864683%" id="linearGradient-16">
            <stop stop-color="#0088FF" offset="0%"></stop>
            <stop stop-color="#1E2849" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="130.217634%" id="linearGradient-17">
            <stop stop-color="#FFFFFF" stop-opacity="0.2" offset="0%"></stop>
            <stop stop-color="#FFFFFF" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="22.0505937%" x2="50%" y2="127.877512%" id="linearGradient-18">
            <stop stop-color="#0088FE" stop-opacity="0" offset="0%"></stop>
            <stop stop-color="#0088FF" stop-opacity="0.6" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="22.0505937%" x2="50%" y2="127.877512%" id="linearGradient-19">
            <stop stop-color="#0088FE" stop-opacity="0" offset="0%"></stop>
            <stop stop-color="#0088FF" stop-opacity="0.6" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="99.8838682%" id="linearGradient-20">
            <stop stop-color="#0088FE" stop-opacity="0" offset="0%"></stop>
            <stop stop-color="#0088FF" stop-opacity="0.2" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="150.633094%" id="linearGradient-21">
            <stop stop-color="#0088FE" stop-opacity="0" offset="0%"></stop>
            <stop stop-color="#0088FF" stop-opacity="0.6" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="12.2559052%" y1="57.1412248%" x2="100%" y2="39.9492422%" id="linearGradient-22">
            <stop stop-color="#0088FF" offset="0%"></stop>
            <stop stop-color="#0088FF" stop-opacity="0.1" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="69.1135117%" y1="45.710686%" x2="49.1496627%" y2="94.3569749%" id="linearGradient-23">
            <stop stop-color="#0088FF" stop-opacity="0" offset="0%"></stop>
            <stop stop-color="#00001F" offset="100%"></stop>
        </linearGradient>
        <radialGradient cx="54.8303584%" cy="11.3506541%" fx="54.8303584%" fy="11.3506541%" r="1172.02162%" gradientTransform="translate(0.548304,0.113507),scale(1.000000,0.106421),rotate(90.000000),scale(1.000000,0.111275),translate(-0.548304,-0.113507)" id="radialGradient-24">
            <stop stop-color="#0088FF" stop-opacity="0.8" offset="0%"></stop>
            <stop stop-color="#0088FF" stop-opacity="0" offset="100%"></stop>
        </radialGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="137.882678%" id="linearGradient-25">
            <stop stop-color="#0088FF" stop-opacity="0.2" offset="0%"></stop>
            <stop stop-color="#0088FF" stop-opacity="0" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="12.2559052%" y1="56.6738166%" x2="100%" y2="40.6070853%" id="linearGradient-26">
            <stop stop-color="#0088FF" offset="0%"></stop>
            <stop stop-color="#0088FF" stop-opacity="0.1" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="32.7043852%" x2="49.1496627%" y2="91.4537179%" id="linearGradient-27">
            <stop stop-color="#0088FF" stop-opacity="0" offset="0%"></stop>
            <stop stop-color="#00001F" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="26.0274364%" x2="100%" y2="73.9725636%" id="linearGradient-28">
            <stop stop-color="#0088FE" offset="0%"></stop>
            <stop stop-color="#0088FD" stop-opacity="0" offset="100%"></stop>
        </linearGradient>
        <radialGradient cx="50%" cy="55.1807424%" fx="50%" fy="55.1807424%" r="63.3623168%" gradientTransform="translate(0.500000,0.551807),scale(0.692424,1.000000),rotate(90.000000),scale(1.000000,1.534642),translate(-0.500000,-0.551807)" id="radialGradient-29">
            <stop stop-color="#0088FE" offset="0%"></stop>
            <stop stop-color="#0088FE" stop-opacity="0" offset="100%"></stop>
        </radialGradient>
        <radialGradient cx="54.8303584%" cy="28.1695852%" fx="54.8303584%" fy="28.1695852%" r="451.787258%" gradientTransform="translate(0.548304,0.281696),scale(1.000000,0.250000),rotate(90.000000),scale(1.000000,0.164013),translate(-0.548304,-0.281696)" id="radialGradient-30">
            <stop stop-color="#0088FF" offset="0%"></stop>
            <stop stop-color="#0088FF" stop-opacity="0" offset="100%"></stop>
        </radialGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-31">
            <stop stop-color="#0088FF" stop-opacity="0.2" offset="0%"></stop>
            <stop stop-color="#0088FF" stop-opacity="0.2" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="89.6167652%" y1="34.324283%" x2="50%" y2="79.1494257%" id="linearGradient-32">
            <stop stop-color="#0088FE" offset="0%"></stop>
            <stop stop-color="#0088FD" stop-opacity="0" offset="100%"></stop>
        </linearGradient>
        <radialGradient cx="97.0663535%" cy="55.90739%" fx="97.0663535%" fy="55.90739%" r="61.2085209%" gradientTransform="translate(0.970664,0.559074),scale(0.763537,1.000000),rotate(90.000000),scale(1.000000,1.534642),translate(-0.970664,-0.559074)" id="radialGradient-33">
            <stop stop-color="#0088FE" offset="0%"></stop>
            <stop stop-color="#0088FE" stop-opacity="0" offset="100%"></stop>
        </radialGradient>
        <path d="M41.9489746,153.915933 C43.0535441,154.268632 43.9489746,153.472682 43.9489746,152.138129 C43.9489746,150.803576 43.0535441,149.435789 41.9489746,149.08309 C40.8444051,148.730391 39.9489746,149.526342 39.9489746,150.860894 C39.9489746,152.195447 40.8444051,153.563235 41.9489746,153.915933 Z" id="path-34"></path>
        <filter x="-187.5%" y="-150.0%" width="475.0%" height="400.0%" filterUnits="objectBoundingBox" id="filter-35">
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="2.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0.533333333   0 0 0 0 1  0 0 0 1 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
        <path d="M32.9489746,149.915933 C34.0535441,150.268632 34.9489746,149.472682 34.9489746,148.138129 C34.9489746,146.803576 34.0535441,145.435789 32.9489746,145.08309 C31.8444051,144.730391 30.9489746,145.526342 30.9489746,146.860894 C30.9489746,148.195447 31.8444051,149.563235 32.9489746,149.915933 Z" id="path-36"></path>
        <filter x="-187.5%" y="-150.0%" width="475.0%" height="400.0%" filterUnits="objectBoundingBox" id="filter-37">
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="2.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0.992156863   0 0 0 0 0.678431373   0 0 0 0 0.305882353  0 0 0 1 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
        <path d="M24.9489746,145.915933 C26.0535441,146.268632 26.9489746,145.472682 26.9489746,144.138129 C26.9489746,142.803576 26.0535441,141.435789 24.9489746,141.08309 C23.8444051,140.730391 22.9489746,141.526342 22.9489746,142.860894 C22.9489746,144.195447 23.8444051,145.563235 24.9489746,145.915933 Z" id="path-38"></path>
        <filter x="-187.5%" y="-150.0%" width="475.0%" height="400.0%" filterUnits="objectBoundingBox" id="filter-39">
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="2.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0.976470588   0 0 0 0 0.341176471   0 0 0 0 0.219607843  0 0 0 1 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
        <linearGradient x1="67.9064871%" y1="97.7317116%" x2="130.52749%" y2="23.06759%" id="linearGradient-40">
            <stop stop-color="#0088FF" stop-opacity="0" offset="0%"></stop>
            <stop stop-color="#FFFFFF" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="57.8540322%" y1="131.209805%" x2="46.2190614%" y2="14.0307928%" id="linearGradient-41">
            <stop stop-color="#0088FF" stop-opacity="0.2" offset="0%"></stop>
            <stop stop-color="#0088FF" stop-opacity="0.8" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="-46.9401658%" y1="62.6409794%" x2="100%" y2="50%" id="linearGradient-42">
            <stop stop-color="#0088FF" stop-opacity="0.2" offset="0%"></stop>
            <stop stop-color="#0088FF" stop-opacity="0.8" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="7.03298809%" y1="55.8510019%" x2="121.127705%" y2="43.916358%" id="linearGradient-43">
            <stop stop-color="#0088FF" stop-opacity="0" offset="0%"></stop>
            <stop stop-color="#36A1FF" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="79.5913652%" y1="-0.681248721%" x2="-7.55694611%" y2="82.8628372%" id="linearGradient-44">
            <stop stop-color="#0088FD" stop-opacity="0" offset="0%"></stop>
            <stop stop-color="#0088FE" offset="100%"></stop>
        </linearGradient>
        <radialGradient cx="14.3326037%" cy="64.9244517%" fx="14.3326037%" fy="64.9244517%" r="49.1313877%" gradientTransform="translate(0.143326,0.649245),scale(0.623246,1.000000),rotate(-104.127940),scale(1.000000,2.350015),translate(-0.143326,-0.649245)" id="radialGradient-45">
            <stop stop-color="#0088FE" offset="0%"></stop>
            <stop stop-color="#0088FE" stop-opacity="0" offset="100%"></stop>
        </radialGradient>
        <linearGradient x1="134.27678%" y1="28.6783404%" x2="-28.8800991%" y2="76.7112894%" id="linearGradient-46">
            <stop stop-color="#0088FD" stop-opacity="0" offset="0%"></stop>
            <stop stop-color="#0088FE" offset="100%"></stop>
        </linearGradient>
        <radialGradient cx="24.9589934%" cy="70.2605994%" fx="24.9589934%" fy="70.2605994%" r="153.582457%" gradientTransform="translate(0.249590,0.702606),scale(0.443834,1.000000),rotate(76.623677),scale(1.000000,1.534642),translate(-0.249590,-0.702606)" id="radialGradient-47">
            <stop stop-color="#0088FE" offset="0%"></stop>
            <stop stop-color="#0088FE" stop-opacity="0" offset="100%"></stop>
        </radialGradient>
        <linearGradient x1="135.758003%" y1="47.2882096%" x2="-11.5828187%" y2="51.1726591%" id="linearGradient-48">
            <stop stop-color="#F95738" offset="0%"></stop>
            <stop stop-color="#0088FF" stop-opacity="0.3" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="41.1133498%" x2="49.1496627%" y2="71.2993115%" id="linearGradient-49">
            <stop stop-color="#0088FF" stop-opacity="0" offset="0%"></stop>
            <stop stop-color="#FFFFFF" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="96.8652038%" y1="55.2670646%" x2="-17.3222137%" y2="47.3039255%" id="linearGradient-50">
            <stop stop-color="#043560" offset="0%"></stop>
            <stop stop-color="#0B325F" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="100%" y1="57.0940632%" x2="-4.27024148%" y2="44.8061608%" id="linearGradient-51">
            <stop stop-color="#0088FF" stop-opacity="0.2" offset="0%"></stop>
            <stop stop-color="#0088FF" stop-opacity="0.8" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="0%" y1="41.1792577%" x2="110.211182%" y2="61.5403456%" id="linearGradient-52">
            <stop stop-color="#0088FF" stop-opacity="0" offset="0%"></stop>
            <stop stop-color="#0088FF" stop-opacity="0.4" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="-12.4623114%" y1="40.8883584%" x2="149.772607%" y2="70.7982983%" id="linearGradient-53">
            <stop stop-color="#0088FF" stop-opacity="0.1" offset="0%"></stop>
            <stop stop-color="#0088FF" stop-opacity="0.6" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="47.6205129%" y1="49.1000156%" x2="50%" y2="65.6272122%" id="linearGradient-54">
            <stop stop-color="#0088FF" stop-opacity="0" offset="0%"></stop>
            <stop stop-color="#0088FF" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="数据源网关" transform="translate(-6.000000, 0.000000)">
            <g id="数据存储器1备份" transform="translate(6.948975, 82.999512)">
                <g id="底座" transform="translate(21.000000, 114.000000)">
                    <g id="矩形备份">
                        <use fill="black" fill-opacity="1" filter="url(#filter-3)" xlink:href="#path-2"></use>
                        <path stroke="url(#linearGradient-1)" stroke-width="0.5" d="M107.357455,3.85 L35.6838813,3.85 L0.352963028,39.1214899 L35.6846177,74.75 L107.715382,74.75 L143.046153,39.1223811 L107.357455,3.85 Z" stroke-linejoin="square" fill-opacity="0.1" fill="#0188FE" fill-rule="evenodd"></path>
                    </g>
                    <g id="矩形备份">
                        <use fill="black" fill-opacity="1" filter="url(#filter-7)" xlink:href="#path-6"></use>
                        <path stroke="url(#linearGradient-5)" stroke-width="0.6" d="M101.576618,9.9 L41.8242641,9.9 L12.4232008,39.3010633 L41.8251481,69 L101.874852,69 L131.275741,39.302132 L101.576618,9.9 Z" stroke-linejoin="square" fill="url(#radialGradient-4)" fill-rule="evenodd"></path>
                    </g>
                    <path d="M101.576618,0.3 L41.8242641,0.3 L12.4232008,29.7010633 L41.8251481,59.4 L101.874852,59.4 L131.275741,29.702132 L101.576618,0.3 Z" id="矩形" stroke="url(#linearGradient-9)" stroke-width="0.6" fill="url(#radialGradient-8)"></path>
                    <polygon id="矩形" fill="url(#radialGradient-10)" points="101.7 69.3 131.7 39.45 131.7 29.7 102 59.7 41.7 59.7 12 29.7 12 39.45 41.7 69.3"></polygon>
                    <g id="矩形备份-2">
                        <use fill="black" fill-opacity="1" filter="url(#filter-14)" xlink:href="#path-13"></use>
                        <path stroke="url(#linearGradient-12)" stroke-width="0.6" d="M98.5094807,2.1 L45.2237327,2.1 L19.0226734,28.3668911 L45.2246172,54.9 L98.7753828,54.9 L124.976273,28.3679584 L98.5094807,2.1 Z" stroke-linejoin="square" fill="url(#linearGradient-11)" fill-rule="evenodd"></path>
                    </g>
                    <path d="M95.2177514,3.9 L48.5485448,3.9 L25.6226734,26.883474 L48.5494292,50.1 L95.4505708,50.1 L118.376273,26.8845413 L95.2177514,3.9 Z" id="矩形备份-2" stroke="url(#linearGradient-15)" stroke-width="0.6"></path>
                    <path d="M91.626774,6.9 L52.1756124,6.9 L32.8226734,26.3015645 L52.1764969,45.9 L91.8235031,45.9 L111.176273,26.3026318 L91.626774,6.9 Z" id="矩形备份-2" stroke="url(#linearGradient-16)" stroke-width="0.6"></path>
                    <path d="M78.1606085,19.5 L65.7771162,19.5 L59.8226734,25.4694037 L65.7780007,31.5 L78.2219993,31.5 L84.1762726,25.470471 L78.1606085,19.5 Z" id="矩形备份-2" stroke="url(#linearGradient-17)" stroke-width="0.6"></path>
                </g>
                <g id="底座发光2" transform="translate(61.000000, 87.000000)">
                    <polygon id="路径" fill="url(#linearGradient-18)" points="19.7851868 52.0454774 1.11138876e-13 -3.12800372e-13 61.2 -3.12800372e-13 43.1859192 52.0454774 37.5549866 46.4067078 25.3715149 46.4067078"></polygon>
                    <polygon id="路径" fill="url(#linearGradient-19)" points="19.7851868 52.0454774 4.67126338e-14 2.48689958e-13 61.2 2.48689958e-13 43.1860657 52.0759461 37.5424622 57.7679627 25.5026839 57.7679627"></polygon>
                </g>
                <g id="底座发光1" transform="translate(2.000000, 57.000000)">
                    <polygon id="路径" fill="url(#linearGradient-20)" points="36.9 84.4962979 0 4.26325641e-14 180 4.26325641e-14 143.7 84.4962979 117.200752 57.9304688 63.3992481 57.9304688"></polygon>
                    <polygon id="路径" fill="url(#linearGradient-21)" points="37.2 84.8267666 0.3 0.33046875 180.3 0.33046875 143.7 84.4962979 117.200752 111.330469 63.3992481 111.330469"></polygon>
                </g>
                <g id="装饰线" stroke="#F95738">
                    <polyline id="路径" points="0 57 0 44 9 38"></polyline>
                    <polyline id="路径备份-2" transform="translate(186.341553, 35.751587) scale(-1, 1) translate(-186.341553, -35.751587) " points="183.502197 44.1494141 183.502197 34.229248 189.180908 27.3537598"></polyline>
                    <polyline id="路径备份" transform="translate(111.053162, 3.152710) scale(-1, 1) translate(-111.053162, -3.152710) " points="100.071899 4.19213867 110.431274 0.971801758 122.034424 5.33361816"></polyline>
                </g>
            </g>
            <path d="M129.013079,95.6323198 L145.739313,101.409029 L151.911094,98.1811099 C152.727561,95.6006743 152.810802,93.4313883 152.179138,91.6662509 C151.569494,89.9626495 150.026491,88.8956867 147.472223,88.468646 L129.013079,95.6323198 Z" id="矩形备份-18" stroke="url(#linearGradient-23)" fill="url(#linearGradient-22)"></path>
            <path d="M147.465891,88.3838789 C152.246489,88.5887189 153.893696,91.6948133 152.34795,97.362542 C152.946965,97.3517853 153.334176,97.6614507 153.647643,98.2834864 C153.671,98.3298348 153.868317,98.7439693 153.934306,98.8697936 C154.051899,99.0940145 154.171144,99.2815946 154.314872,99.4586889 C154.383527,99.5432814 154.457156,99.6244659 154.536812,99.7027779 C155.001842,100.159962 155.884205,100.438231 157.186239,100.504158 C156.704174,81.4355919 156.463135,64.1238653 156.463135,48.5688477 C156.463135,32.8677736 156.708718,19.7800446 157.199463,9.328125 L157.204809,5.06791368 C156.748473,1.9722893 155.225199,0.5 152.531494,0.5 C149.838735,0.5 148.173317,1.97596879 147.44897,5.05246765 L147.448654,9.31021707 C147.960578,23.5942578 148.216553,36.6804179 148.216553,48.5688477 C148.216553,60.323103 147.966323,73.5947059 147.465891,88.3838789 Z" id="矩形备份-19" stroke="url(#linearGradient-25)" fill="url(#radialGradient-24)"></path>
            <path d="M164.395577,107.494688 L180.280474,112.367918 L182.92222,111.273938 C184.554668,108.989484 185.121794,106.837525 184.655256,104.795186 C184.205608,102.826783 182.710528,101.739076 180.044643,101.507283 L164.395577,107.494688 Z" id="矩形备份-18" stroke="url(#linearGradient-27)" fill="url(#linearGradient-26)"></path>
            <path d="M174.948975,99.8763428 C176.282308,100.734985 177.615641,101.164307 178.948975,101.164307 C180.282308,101.164307 181.615641,100.734985 182.948975,99.8763428 L182.948975,102.999512 C181.625667,104.832845 180.127946,105.622884 178.455811,105.369629 C176.783675,105.116374 175.61473,104.326335 174.948975,102.999512 L174.948975,99.8763428 Z" id="矩形" stroke="url(#radialGradient-29)" fill="url(#linearGradient-28)"></path>
            <path d="M174.458131,99.3708404 C175.169547,100.111841 175.932027,100.590548 176.748346,100.816135 C178.038923,101.172781 180.112101,101.156021 181.210233,100.819959 C181.835207,100.628698 182.584042,100.139482 183.442704,99.3473457 L182.556466,68.5418831 L182.561366,65.37672 C182.243516,63.123077 181.208782,62.0777711 179.36506,62.0777711 C177.520818,62.0777711 176.384,63.1275989 175.877537,65.3621247 L175.877017,68.5648881 L174.458131,99.3708404 Z" id="矩形备份-19" stroke="url(#linearGradient-31)" fill="url(#radialGradient-30)"></path>
            <polygon id="矩形" stroke="url(#radialGradient-33)" fill="url(#linearGradient-32)" points="18.9125951 127.497785 81.9586779 153.908982 86.9489746 161.544434 86.9489746 183.999512 12.9489746 152.999512 12.9489746 131.763672"></polygon>
            <g id="椭圆形备份-3">
                <use fill="black" fill-opacity="1" filter="url(#filter-35)" xlink:href="#path-34"></use>
                <use fill="#0088FF" fill-rule="evenodd" xlink:href="#path-34"></use>
            </g>
            <g id="椭圆形备份-4">
                <use fill="black" fill-opacity="1" filter="url(#filter-37)" xlink:href="#path-36"></use>
                <use fill="#FDAD4E" fill-rule="evenodd" xlink:href="#path-36"></use>
            </g>
            <g id="椭圆形备份-5">
                <use fill="black" fill-opacity="1" filter="url(#filter-39)" xlink:href="#path-38"></use>
                <use fill="#F95738" fill-rule="evenodd" xlink:href="#path-38"></use>
            </g>
            <path d="M50.5136719,146.713425 L50.5136719,163.768295 L79.4489746,176.239545 L79.4489746,159.184675 L50.5136719,146.713425 Z" id="矩形备份-10" stroke="url(#linearGradient-40)"></path>
            <polygon id="矩形备份-10" fill="url(#linearGradient-41)" points="72.9489746 162.453458 76.9489746 160.453458 76.9489746 172.999512 72.9489746 174.999512"></polygon>
            <path d="M50.5136719,153.701758 L50.5136719,165.165421 L72.4489746,174.251212 L72.4489746,162.787549 L50.5136719,153.701758 Z" id="矩形备份-11" stroke="url(#linearGradient-43)" fill="url(#linearGradient-42)"></path>
            <g id="编组-8" transform="translate(51.948975, 157.578816)" fill="#00398C">
                <path d="M4.79846802,3.87464241 C5.23944973,4.02060146 5.59693604,3.69120939 5.59693604,3.13892464 C5.59693604,2.58663989 5.23944973,2.02060146 4.79846802,1.87464241 C4.35748631,1.72868337 4,2.05807544 4,2.61036019 C4,3.16264494 4.35748631,3.72868337 4.79846802,3.87464241 Z" id="椭圆形备份-3"></path>
                <path d="M0.798468018,2.03458761 C1.23944973,2.18054665 1.59693604,1.85115459 1.59693604,1.29886984 C1.59693604,0.746585087 1.23944973,0.180546654 0.798468018,0.0345876106 C0.357486308,-0.111371433 0,0.218020634 0,0.770305384 C0,1.32259013 0.357486308,1.88862857 0.798468018,2.03458761 Z" id="椭圆形备份-13"></path>
                <path d="M9,5.62712347 C9.44098171,5.77308251 9.79846802,5.44369045 9.79846802,4.8914057 C9.79846802,4.33912095 9.44098171,3.77308251 9,3.62712347 C8.55901829,3.48116443 8.20153198,3.81055649 8.20153198,4.36284124 C8.20153198,4.91512599 8.55901829,5.48116443 9,5.62712347 Z" id="椭圆形备份-6"></path>
                <path d="M2.79846802,6.67708538 C3.23944973,6.82304442 3.59693604,6.49365235 3.59693604,5.9413676 C3.59693604,5.38908285 3.23944973,4.82304442 2.79846802,4.67708538 C2.35748631,4.53112633 2,4.8605184 2,5.41280315 C2,5.9650879 2.35748631,6.53112633 2.79846802,6.67708538 Z" id="椭圆形备份-9"></path>
                <path d="M13.602417,7.64249777 C14.0433987,7.78845681 14.400885,7.45906474 14.400885,6.90677999 C14.400885,6.35449524 14.0433987,5.78845681 13.602417,5.64249777 C13.1614353,5.49653872 12.803949,5.82593079 12.803949,6.37821554 C12.803949,6.93050029 13.1614353,7.49653872 13.602417,7.64249777 Z" id="椭圆形备份-7"></path>
                <path d="M6.79846802,8.45528362 C7.23944973,8.60124266 7.59693604,8.2718506 7.59693604,7.71956585 C7.59693604,7.1672811 7.23944973,6.60124266 6.79846802,6.45528362 C6.35748631,6.30932458 6,6.63871664 6,7.19100139 C6,7.74328614 6.35748631,8.30932458 6.79846802,8.45528362 Z" id="椭圆形备份-10"></path>
                <path d="M17.798468,9.42069601 C18.2394497,9.56665505 18.596936,9.23726299 18.596936,8.68497824 C18.596936,8.13269349 18.2394497,7.56665505 17.798468,7.42069601 C17.3574863,7.27473697 17,7.60412903 17,8.15641378 C17,8.70869853 17.3574863,9.27473697 17.798468,9.42069601 Z" id="椭圆形备份-8"></path>
                <path d="M14.4457947,11.8468435 C14.8867764,11.9928025 15.2442627,11.6634104 15.2442627,11.1111257 C15.2442627,10.5588409 14.8867764,9.99280251 14.4457947,9.84684347 C14.004813,9.70088443 13.6473267,10.0302765 13.6473267,10.5825612 C13.6473267,11.134846 14.004813,11.7008844 14.4457947,11.8468435 Z" id="椭圆形备份-12"></path>
                <path d="M10.3459473,10.1476692 C10.786929,10.2936283 11.1444153,9.96423619 11.1444153,9.41195144 C11.1444153,8.85966669 10.786929,8.29362825 10.3459473,8.14766921 C9.90496556,8.00171017 9.54747925,8.33110224 9.54747925,8.88338698 C9.54747925,9.43567173 9.90496556,10.0017102 10.3459473,10.1476692 Z" id="椭圆形备份-11"></path>
            </g>
            <polygon id="矩形备份-8" stroke="url(#radialGradient-45)" fill="url(#linearGradient-44)" points="86.9489746 160.999512 188.443967 120.743195 188.443967 143.743195 86.9489746 183.999512"></polygon>
            <polygon id="矩形备份-8" stroke="url(#radialGradient-47)" fill="url(#linearGradient-46)" points="81.9489746 153.592285 183.350891 113.733459 188.443967 120.743195 86.9489746 160.999512"></polygon>
            <path d="M118.083965,92.0277693 L20.283867,127.531904 L81.9544792,153.459435 L181.997404,113.779056 L118.083965,92.0277693 Z" id="矩形备份-7" stroke="url(#linearGradient-49)" fill="url(#linearGradient-48)"></path>
            <path d="M119.674012,96.4495086 L164.337266,112.478854 C164.610705,112.576989 164.752816,112.878209 164.654681,113.151648 C164.609493,113.277556 164.518033,113.381519 164.39891,113.442383 C163.708335,113.79522 162.902591,113.846769 162.172684,113.584809 L117.20282,97.4453597 C116.939139,97.3507261 116.802099,97.060255 116.896733,96.7965744 C116.945616,96.6603687 117.050347,96.5515263 117.18457,96.4974365 C117.980429,96.1767186 118.866398,96.1596615 119.674012,96.4495086 Z" id="矩形备份-24" fill="url(#linearGradient-50)"></path>
            <path d="M111.674012,99.4495086 L156.337266,115.478854 C156.610705,115.576989 156.752816,115.878209 156.654681,116.151648 C156.609493,116.277556 156.518033,116.381519 156.39891,116.442383 C155.708335,116.79522 154.902591,116.846769 154.172684,116.584809 L109.20282,100.44536 C108.939139,100.350726 108.802099,100.060255 108.896733,99.7965744 C108.945616,99.6603687 109.050347,99.5515263 109.18457,99.4974365 C109.980429,99.1767186 110.866398,99.1596615 111.674012,99.4495086 Z" id="矩形备份-25" fill="url(#linearGradient-50)"></path>
            <path d="M103.674012,102.449509 L148.337266,118.478854 C148.610705,118.576989 148.752816,118.878209 148.654681,119.151648 C148.609493,119.277556 148.518033,119.381519 148.39891,119.442383 C147.708335,119.79522 146.902591,119.846769 146.172684,119.584809 L101.20282,103.44536 C100.939139,103.350726 100.802099,103.060255 100.896733,102.796574 C100.945616,102.660369 101.050347,102.551526 101.18457,102.497437 C101.980429,102.176719 102.866398,102.159661 103.674012,102.449509 Z" id="矩形备份-26" fill="url(#linearGradient-50)"></path>
            <path d="M95.6740116,105.449509 L140.337266,121.478854 C140.610705,121.576989 140.752816,121.878209 140.654681,122.151648 C140.609493,122.277556 140.518033,122.381519 140.39891,122.442383 C139.708335,122.79522 138.902591,122.846769 138.172684,122.584809 L93.2028196,106.44536 C92.9391389,106.350726 92.8020992,106.060255 92.8967328,105.796574 C92.9456163,105.660369 93.0503471,105.551526 93.1845703,105.497437 C93.9804288,105.176719 94.8663982,105.159661 95.6740116,105.449509 Z" id="矩形备份-27" fill="url(#linearGradient-50)"></path>
            <polygon id="矩形备份-21" fill="url(#linearGradient-51)" points="54.0136719 150.953458 76.9489746 160.453458 72.9489746 162.453458 50.0136719 152.953458"></polygon>
            <path d="M18.9125951,154.999512 L80.9489746,180.888929 L80.9489746,182.888929 C69.7867313,186.819948 57.5580406,186.435376 46.6648578,181.810751 L18.5628722,169.88025 C14.4920172,168.151996 12.5929631,163.450891 14.3212162,159.380036 C15.1831083,157.349871 16.8441826,155.76508 18.9125951,154.999512 L18.9125951,154.999512 L18.9125951,154.999512 Z" id="矩形备份-17" fill="url(#linearGradient-52)"></path>
            <path d="M18.7115659,155.534356 C17.0054189,156.154023 15.633238,157.460983 14.9329033,159.141684 C13.552874,162.453553 15.1189394,166.257088 18.4308082,167.637117 L46.8095978,179.462332 C57.2188007,183.799764 68.819162,184.278322 79.5285805,180.839478 L18.7115659,155.534356 Z" id="形状结合" stroke="url(#linearGradient-54)" fill="url(#linearGradient-53)"></path>
        </g>
    </g>
</svg>
<svg  class="SVG3" width="114px" height="120px" viewBox="0 0 114 120" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 57.1 (83088) - https://sketch.com -->
    <title>电脑1</title>
    <desc>Created with Sketch.</desc>
    <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="157.476128%" id="linearGradient-1">
            <stop stop-color="#0088FF" stop-opacity="0" offset="0%"></stop>
            <stop stop-color="#FFFFFF" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="100%" y1="53.4764535%" x2="0%" y2="45.9291451%" id="linearGradient-2">
            <stop stop-color="#0088FF" stop-opacity="0.3" offset="0%"></stop>
            <stop stop-color="#0088FF" stop-opacity="0.2" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="41.9776464%" x2="49.1496627%" y2="69.227786%" id="linearGradient-3">
            <stop stop-color="#0088FF" stop-opacity="0" offset="0%"></stop>
            <stop stop-color="#FFFFFF" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="3.39421453%" x2="50%" y2="97.6657779%" id="linearGradient-4">
            <stop stop-color="#0088FE" stop-opacity="0.2" offset="0%"></stop>
            <stop stop-color="#0088FD" stop-opacity="0.1" offset="100%"></stop>
        </linearGradient>
        <radialGradient cx="0%" cy="9.7665081%" fx="0%" fy="9.7665081%" r="183.776663%" gradientTransform="translate(0.000000,0.097665),scale(1.000000,0.256759),scale(1.000000,2.452939),translate(-0.000000,-0.097665)" id="radialGradient-5">
            <stop stop-color="#0088FF" stop-opacity="0.6" offset="0%"></stop>
            <stop stop-color="#0088FE" stop-opacity="0" offset="100%"></stop>
        </radialGradient>
        <linearGradient x1="73.4234952%" y1="28.0848673%" x2="26.5765048%" y2="72.0435574%" id="linearGradient-6">
            <stop stop-color="#0088FF" offset="0%"></stop>
            <stop stop-color="#0088FF" stop-opacity="0.2" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="-11.5816743%" x2="49.6016426%" y2="197.597491%" id="linearGradient-7">
            <stop stop-color="#0088FF" stop-opacity="0" offset="0%"></stop>
            <stop stop-color="#FFFFFF" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="5.50681939%" x2="50%" y2="96.2443724%" id="linearGradient-8">
            <stop stop-color="#0088FE" stop-opacity="0.5" offset="0%"></stop>
            <stop stop-color="#0088FD" stop-opacity="0.8" offset="100%"></stop>
        </linearGradient>
        <radialGradient cx="-282.566623%" cy="6.63877346%" fx="-282.566623%" fy="6.63877346%" r="823.470218%" gradientTransform="translate(-2.825666,0.066388),scale(1.000000,0.252093),rotate(-4.393796),scale(1.000000,2.240189),translate(2.825666,-0.066388)" id="radialGradient-9">
            <stop stop-color="#FFFFFF" offset="0%"></stop>
            <stop stop-color="#0088FE" stop-opacity="0" offset="100%"></stop>
        </radialGradient>
        <linearGradient x1="-68.1609398%" y1="73.6230674%" x2="118.453644%" y2="34.7767133%" id="linearGradient-10">
            <stop stop-color="#0088FE" stop-opacity="0.8" offset="0%"></stop>
            <stop stop-color="#0088FD" stop-opacity="0.2" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="-68.1609398%" y1="59.7625942%" x2="118.453644%" y2="43.7087437%" id="linearGradient-11">
            <stop stop-color="#0088FE" stop-opacity="0.8" offset="0%"></stop>
            <stop stop-color="#0088FD" stop-opacity="0.2" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="151.936353%" y1="23.9175306%" x2="-18.7177918%" y2="23.9175306%" id="linearGradient-12">
            <stop stop-color="#F95738" offset="0%"></stop>
            <stop stop-color="#0088FF" stop-opacity="0.8" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="18.9791507%" y1="28.8519636%" x2="75.7514114%" y2="75.2457476%" id="linearGradient-13">
            <stop stop-color="#0088FF" stop-opacity="0" offset="0%"></stop>
            <stop stop-color="#FFFFFF" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="4.03634695%" y1="77.1183172%" x2="76.6279155%" y2="32.5242882%" id="linearGradient-14">
            <stop stop-color="#0088FE" stop-opacity="0.8" offset="0%"></stop>
            <stop stop-color="#0088FD" stop-opacity="0.2" offset="100%"></stop>
        </linearGradient>
        <radialGradient cx="-185.384247%" cy="22.3715259%" fx="-185.384247%" fy="22.3715259%" r="388.85172%" gradientTransform="translate(-1.853842,0.223715),scale(1.000000,0.623692),rotate(1.372038),scale(1.000000,2.240189),translate(1.853842,-0.223715)" id="radialGradient-15">
            <stop stop-color="#FFFFFF" offset="0%"></stop>
            <stop stop-color="#0088FE" stop-opacity="0" offset="100%"></stop>
        </radialGradient>
        <linearGradient x1="89.9493222%" y1="54.2664226%" x2="13.6979804%" y2="47.3334859%" id="linearGradient-16">
            <stop stop-color="#0088FE" offset="0%"></stop>
            <stop stop-color="#0088FD" stop-opacity="0.4" offset="100%"></stop>
        </linearGradient>
        <path d="M8.69270315,2.0166485 L26.1876914,8.52049655 C26.7673453,8.73598577 27.0625592,9.38057668 26.84707,9.96023065 C26.7405102,10.2468705 26.5213525,10.4774568 26.2404948,10.5984375 C24.5922291,11.3084352 22.7360347,11.3669231 21.0463396,10.7621032 L2.92704234,4.27636952 C2.31687343,4.05796188 1.99928817,3.38626787 2.21769582,2.77609896 C2.33131815,2.45867043 2.57598495,2.20544929 2.88932292,2.08098958 C4.74919059,1.34223908 6.81691385,1.31931458 8.69270315,2.0166485 Z" id="path-17"></path>
        <filter x="-0.4%" y="-6.4%" width="101.7%" height="131.9%" filterUnits="objectBoundingBox" id="filter-18">
            <feMorphology radius="0.266666667" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"></feMorphology>
            <feOffset dx="0" dy="1" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="0.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></feComposite>
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
        <radialGradient cx="72.0872756%" cy="76.2882967%" fx="72.0872756%" fy="76.2882967%" r="74.0262743%" gradientTransform="translate(0.720873,0.762883),scale(0.373886,1.000000),rotate(125.359814),scale(1.000000,1.928931),translate(-0.720873,-0.762883)" id="radialGradient-19">
            <stop stop-color="#FFFFFF" offset="0%"></stop>
            <stop stop-color="#0088FE" stop-opacity="0" offset="100%"></stop>
        </radialGradient>
        <linearGradient x1="50%" y1="-52.6534598%" x2="50%" y2="100%" id="linearGradient-20">
            <stop stop-color="#0088FE" offset="0%"></stop>
            <stop stop-color="#0088FD" stop-opacity="0" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="115.011627%" y1="3.1192014%" x2="9.33087356%" y2="78.678114%" id="linearGradient-21">
            <stop stop-color="#FFFFFF" offset="0%"></stop>
            <stop stop-color="#0088FE" stop-opacity="0" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="3.39421453%" x2="50%" y2="100%" id="linearGradient-22">
            <stop stop-color="#0088FE" stop-opacity="0.5" offset="0%"></stop>
            <stop stop-color="#0088FD" stop-opacity="0.1" offset="100%"></stop>
        </linearGradient>
        <radialGradient cx="95.8047204%" cy="28.0606066%" fx="95.8047204%" fy="28.0606066%" r="110.759566%" gradientTransform="translate(0.958047,0.280606),scale(1.000000,0.780774),rotate(149.880330),scale(1.000000,1.023851),translate(-0.958047,-0.280606)" id="radialGradient-23">
            <stop stop-color="#FFFFFF" stop-opacity="0.6" offset="0%"></stop>
            <stop stop-color="#0088FE" offset="100%"></stop>
        </radialGradient>
        <linearGradient x1="127.83566%" y1="-3.89423077%" x2="-0.847679364%" y2="86.3311298%" id="linearGradient-24">
            <stop stop-color="#F95738" offset="0%"></stop>
            <stop stop-color="#0088FF" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-25">
            <stop stop-color="#FFFFFF" stop-opacity="0" offset="0%"></stop>
            <stop stop-color="#FFFFFF" stop-opacity="0.4" offset="100%"></stop>
        </linearGradient>
        <polygon id="path-26" points="2.66666667 6.4 57.5254001 26.1158325 57.6 75.7333333 2.67790215 56.0029086"></polygon>
        <filter x="-16.4%" y="-13.6%" width="132.8%" height="127.2%" filterUnits="objectBoundingBox" id="filter-27">
            <feMorphology radius="0.5" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"></feMorphology>
            <feOffset dx="0" dy="0" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="2.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></feComposite>
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0.533333333   0 0 0 0 1  0 0 0 1 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
        <linearGradient x1="243.61412%" y1="54.6248918%" x2="0%" y2="92.641721%" id="linearGradient-28">
            <stop stop-color="#FFFFFF" stop-opacity="0.2" offset="0%"></stop>
            <stop stop-color="#FDAD4E" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="243.61412%" y1="54.6248918%" x2="0%" y2="92.641721%" id="linearGradient-29">
            <stop stop-color="#FFFFFF" stop-opacity="0.2" offset="0%"></stop>
            <stop stop-color="#0088FF" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="243.61412%" y1="53.5513854%" x2="0%" y2="82.7439408%" id="linearGradient-30">
            <stop stop-color="#FFFFFF" stop-opacity="0.2" offset="0%"></stop>
            <stop stop-color="#FDAD4E" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="243.61412%" y1="53.5513854%" x2="0%" y2="82.7439408%" id="linearGradient-31">
            <stop stop-color="#FFFFFF" stop-opacity="0.2" offset="0%"></stop>
            <stop stop-color="#0088FF" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="3.39421453%" x2="50%" y2="97.6657779%" id="linearGradient-32">
            <stop stop-color="#0088FE" offset="0%"></stop>
            <stop stop-color="#0088FD" stop-opacity="0.2" offset="100%"></stop>
        </linearGradient>
        <radialGradient cx="173.801383%" cy="179.20024%" fx="173.801383%" fy="179.20024%" r="575.117811%" gradientTransform="translate(1.738014,1.792002),scale(0.365754,1.000000),rotate(-160.279215),scale(1.000000,0.350218),translate(-1.738014,-1.792002)" id="radialGradient-33">
            <stop stop-color="#FFFFFF" offset="0%"></stop>
            <stop stop-color="#0088FE" stop-opacity="0" offset="100%"></stop>
        </radialGradient>
        <linearGradient x1="50%" y1="3.39421453%" x2="50%" y2="97.6657779%" id="linearGradient-34">
            <stop stop-color="#0088FE" offset="0%"></stop>
            <stop stop-color="#0088FD" stop-opacity="0.2" offset="100%"></stop>
        </linearGradient>
        <radialGradient cx="-506.20243%" cy="15.8698131%" fx="-506.20243%" fy="15.8698131%" r="1562.28321%" gradientTransform="translate(-5.062024,0.158698),scale(1.000000,0.050813),rotate(-15.117250),scale(1.000000,1.775232),translate(5.062024,-0.158698)" id="radialGradient-35">
            <stop stop-color="#FFFFFF" offset="0%"></stop>
            <stop stop-color="#0088FE" stop-opacity="0" offset="100%"></stop>
        </radialGradient>
        <linearGradient x1="47.0717357%" y1="50%" x2="39.9565271%" y2="57.2130897%" id="linearGradient-36">
            <stop stop-color="#0088FE" stop-opacity="0" offset="0%"></stop>
            <stop stop-color="#0088FF" stop-opacity="0.8" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="45.9928787%" y1="48.8893576%" x2="50%" y2="56.5467916%" id="linearGradient-37">
            <stop stop-color="#0088FF" stop-opacity="0" offset="0%"></stop>
            <stop stop-color="#0088FF" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="48.1047454%" y1="50%" x2="50%" y2="56.5467916%" id="linearGradient-38">
            <stop stop-color="#0088FF" stop-opacity="0" offset="0%"></stop>
            <stop stop-color="#0088FF" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="19.4359629%" y1="40.2949828%" x2="82.0590179%" y2="57.0536357%" id="linearGradient-39">
            <stop stop-color="#0088FF" offset="0%"></stop>
            <stop stop-color="#0088FF" stop-opacity="0" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="123.555974%" y1="49.0611163%" x2="-27.2841989%" y2="53.1217753%" id="linearGradient-40">
            <stop stop-color="#FDAD4E" stop-opacity="0" offset="0%"></stop>
            <stop stop-color="#FDAD4E" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="电脑worker" transform="translate(0.000000, 1.000000)">
            <g id="电脑1">
                <path d="M52.6233355,76.0009928 L0.352181258,96.7125149 L0.335537274,98.4804304 L52.0696094,117.325967 L57.789982,117.333252 L110.662369,96.3099593 L110.666151,94.5805441 L58.3550476,76.0902881 L52.6233355,76.0009928 Z" id="路径-2备份" stroke="url(#linearGradient-1)" stroke-width="0.666666667" fill-opacity="0.2" fill="#0188FE"></path>
                <g id="主机" transform="translate(29.666667, 0.000000)">
                    <path d="M20.7320189,71.0203049 L0.988287561,78.0751168 L63.7156378,100.609082 L82.9981677,92.8970025 L20.7320189,71.0203049 Z" id="路径-2" stroke="url(#linearGradient-3)" stroke-width="0.666666667" fill="url(#linearGradient-2)"></path>
                    <polygon id="矩形" stroke="url(#radialGradient-5)" stroke-width="0.533333333" fill="url(#linearGradient-4)" points="0.38218795 7.41187246 20.3969991 0.126838276 20.3969991 70.7935049 0.38218795 78.0785391"></polygon>
                    <path d="M0.781000284,7.88103981 L0.939292463,77.6192977 L63.9951384,100.271271 L63.9951384,29.8590261 L0.781000284,7.88103981 Z" id="路径-2" stroke="url(#linearGradient-7)" stroke-width="0.666666667" fill="url(#linearGradient-6)"></path>
                    <polygon id="矩形备份-6" stroke="url(#radialGradient-9)" stroke-width="0.533333333" fill="url(#linearGradient-8)" points="63.9226888 29.925944 83.7155213 22.0785391 83.7155213 92.7452058 63.9226888 100.592611"></polygon>
                    <polygon id="矩形备份-6" fill="url(#linearGradient-10)" points="63.7155213 36.7452058 83.7155213 28.7452058 83.7155213 39.4118725 63.7155213 47.4118725"></polygon>
                    <polygon id="矩形备份-6" fill="url(#linearGradient-11)" points="63.7155213 50.0785391 83.7155213 42.0785391 83.7155213 46.0785391 63.7155213 54.0785391"></polygon>
                    <path d="M20.7320189,0.353638251 L0.988287561,7.40845015 L63.7156378,29.9424156 L82.9981677,22.2303358 L20.7320189,0.353638251 Z" id="路径-2" stroke="url(#linearGradient-13)" stroke-width="0.666666667" fill="url(#linearGradient-12)"></path>
                    <g id="按钮" transform="translate(70.000000, 57.333333)">
                        <path d="M4.0629069,1.58674599 C5.5955064,0.98819767 7.32314306,1.74539576 7.92169139,3.27799526 C8.0565871,3.62339946 8.1258138,3.99095171 8.1258138,4.36176287 L8.1258138,5.43591796 C8.1258138,8.07416398 6.51539352,10.4451175 4.0629069,11.4175636 C2.53879761,12.0218948 0.813355691,11.2762673 0.209024506,9.75215804 C0.0709233658,9.40387015 -2.26026661e-14,9.03258799 -2.04281037e-14,8.65791963 L-2.04281037e-14,7.53525486 C-2.07502284e-14,4.9049067 1.61278294,2.54362846 4.0629069,1.58674599 Z" id="矩形" stroke="url(#radialGradient-15)" stroke-width="0.533333333" fill="url(#linearGradient-14)"></path>
                        <path d="M4.05797101,3.81638675 C4.92839686,3.47185759 5.91331249,3.89818108 6.25784165,4.76860693 C6.33644661,4.96719617 6.37681159,5.17885214 6.37681159,5.39243216 L6.37681159,6.07197167 C6.37681159,7.58177854 5.45888768,8.93993418 4.05797101,9.50291664 C3.19242316,9.85075193 2.20878177,9.43106298 1.86094648,8.56551512 C1.78048142,8.36528714 1.73913043,8.15149488 1.73913043,7.93570361 L1.73913043,7.2281042 C1.73913043,5.7228949 2.65840953,4.37035667 4.05797101,3.81638675 Z" id="矩形" fill="#F95738"></path>
                    </g>
                    <polygon id="矩形备份-6" fill-opacity="0.3" fill="#1C2849" points="54.6654968 26.3367716 72.6688232 18.9470825 73.3734131 19.198995 55.332784 26.5806885"></polygon>
                </g>
                <g id="显示屏" transform="translate(13.666667, 17.333333)">
                    <g id="编组-9" transform="translate(12.000000, 71.333333)">
                        <g id="矩形备份-3">
                            <use fill="black" fill-opacity="1" filter="url(#filter-18)" xlink:href="#path-17"></use>
                            <use stroke="#0088FE" stroke-width="0.533333333" fill="url(#linearGradient-16)" fill-rule="evenodd" xlink:href="#path-17"></use>
                        </g>
                        <path d="M8.69270315,1.08331516 L26.1876914,7.58716322 C26.7673453,7.80265244 27.0625592,8.44724335 26.84707,9.02689731 C26.7405102,9.31353718 26.5213525,9.54412346 26.2404948,9.66510417 C24.5922291,10.3751018 22.7360347,10.4335898 21.0463396,9.82876984 L2.92704234,3.34303619 C2.31687343,3.12462854 1.99928817,2.45293453 2.21769582,1.84276562 C2.33131815,1.5253371 2.57598495,1.27211596 2.88932292,1.14765625 C4.74919059,0.408905746 6.81691385,0.385981251 8.69270315,1.08331516 Z" id="矩形备份-3" stroke="url(#radialGradient-19)" stroke-width="0.533333333" fill="url(#linearGradient-16)"></path>
                    </g>
                    <polygon id="矩形备份-5" stroke="url(#linearGradient-21)" stroke-width="0.533333333" fill="url(#linearGradient-20)" stroke-linejoin="bevel" points="2.66666667 8.23369134e-14 63.4684245 21.8822266 63.4684245 77.8736654 2.67812814 56.0046309"></polygon>
                    <polygon id="矩形备份-20" stroke-opacity="0.3" stroke="#0088FE" stroke-width="0.533333333" fill="url(#linearGradient-22)" points="1.65083654e-13 1.58525391 2.93105469 0.31328125 2.76524926 55.9993634 1.26286966e-18 57.0986979"></polygon>
                    <polygon id="矩形备份-4" stroke="url(#radialGradient-23)" stroke-width="0.533333333" stroke-linejoin="bevel" points="2.27373675e-13 1.6 60.8017578 23.4822266 60.8017578 79.4736654 0.011461474 57.6046309"></polygon>
                    <g id="矩形备份-4">
                        <use fill="black" fill-opacity="1" filter="url(#filter-27)" xlink:href="#path-26"></use>
                        <path stroke="url(#linearGradient-25)" stroke-width="0.666666667" d="M3.00010738,6.87404315 L3.01118238,55.7684473 L57.2659533,75.259139 L57.192419,26.3503685 L3.00010738,6.87404315 Z" stroke-linejoin="square" fill="url(#linearGradient-24)" fill-rule="evenodd"></path>
                    </g>
                    <polygon id="矩形备份-4" fill="url(#linearGradient-28)" points="6.4 19.7333333 27.2042257 27.2102218 27.2005919 29.3380232 6.41123548 21.8695752"></polygon>
                    <polygon id="矩形备份-4" fill="url(#linearGradient-29)" points="6.4 25.0666667 27.2042257 32.5435551 27.2005919 34.6713566 6.41123548 27.2029086"></polygon>
                    <polygon id="矩形备份-4" fill="url(#linearGradient-30)" points="6.4 30.4 53.8708923 47.4768884 53.8672586 49.6046899 6.41123548 32.5362419"></polygon>
                    <polygon id="矩形备份-4" fill="url(#linearGradient-31)" points="6.4 36.2666667 53.8708923 53.3435551 53.8672586 55.4713566 6.41123548 38.4029086"></polygon>
                    <polygon id="矩形备份-4" fill="url(#linearGradient-30)" points="6.4 42.1333333 53.8708923 59.2102218 53.8672586 61.3380232 6.41123548 44.2695752"></polygon>
                    <polygon id="矩形备份-20" stroke="url(#radialGradient-33)" stroke-width="0.533333333" fill="url(#linearGradient-32)" stroke-linejoin="bevel" points="1.1316136e-13 1.6 2.84151204 0.0672200521 63.7041824 22.0826717 60.5826009 23.3672689"></polygon>
                    <polygon id="矩形备份-20" stroke="url(#radialGradient-35)" stroke-width="0.533333333" fill="url(#linearGradient-34)" stroke-linejoin="bevel" points="60.8 23.2372396 63.7041824 22.0826717 63.5652493 78.137905 60.8 79.2372396"></polygon>
                </g>
                <polygon id="路径" fill="url(#linearGradient-36)" points="28.640625 92.5068359 14.3333333 75.0761719 75.1350911 96.8069987 49.555013 100"></polygon>
                <g id="鼠标" transform="translate(65.666667, 105.859725)">
                    <path d="M6.54484038,7.48263574 C5.92718025,7.73285154 5.45640963,8.24980246 5.26491604,8.88811444 C4.91612748,10.050743 5.57587513,11.2759886 6.73850364,11.6247771 C10.998909,12.9028988 15.5678767,12.6892795 19.6904416,11.0192173 L25.8551596,8.52187333 C26.4728198,8.27165753 26.9435904,7.75470661 27.135084,7.11639462 C27.4838725,5.95376611 26.8241249,4.72852049 25.6614964,4.37973194 C21.401091,3.10161032 16.8321233,3.31522958 12.7095584,4.98529178 L6.54484038,7.48263574 Z" id="矩形" stroke="url(#linearGradient-37)" stroke-width="0.5" fill-opacity="0.1" fill="#0188FE"></path>
                    <path d="M6.54484038,6.14930241 C5.92718025,6.3995182 5.45640963,6.91646913 5.26491604,7.55478111 C4.91612748,8.71740962 5.57587513,9.94265524 6.73850364,10.2914438 C10.998909,11.5695654 15.5678767,11.3559462 19.6904416,9.68588395 L25.8551596,7.18853999 C26.4728198,6.9383242 26.9435904,6.42137327 27.135084,5.78306129 C27.4838725,4.62043278 26.8241249,3.39518716 25.6614964,3.04639861 C21.401091,1.76827698 16.8321233,1.98189624 12.7095584,3.65195845 L6.54484038,6.14930241 Z" id="矩形" stroke="url(#linearGradient-38)" stroke-width="0.5" fill-opacity="0.4" fill="#0188FE"></path>
                    <path d="M26.4787801,3.18967315 C26.8862808,3.4962324 27.1725968,3.88610463 27.3377279,4.35928985 C27.5854245,5.06906769 27.5854245,6.6689212 26.1333333,7.22881703 C25.1652725,7.60208092 23.2562448,8.35370853 20.40625,9.48369985 C17.6020833,10.6527537 14.3893012,11.2372806 10.7679036,11.2372806 C7.14650608,11.2372806 5.22549913,10.1589386 5.00488281,8.00225453 C4.88509115,5.39486605 5.67892795,3.44087299 7.38639323,2.14027537 C12.4817202,-1.74089878 20.2945964,0.303035784 26.4607747,3.16940948" id="路径-4" fill="url(#linearGradient-39)"></path>
                    <path d="M20.1987305,0.806942034 C17.2170681,0.0363257148 14.9659017,0.132652755 13.4452311,1.09592315 C11.1642253,2.54082875 14.0169271,3.94870636 17.1078288,2.72507354 C19.1684299,1.90931834 21.5394423,1.71438561 24.2208659,2.14027537 L20.1987305,0.806942034 Z" id="路径-5" fill="url(#linearGradient-40)"></path>
                </g>
            </g>
        </g>
    </g>
</svg>
<svg  class="SVG4" width="49px" height="85px" viewBox="0 0 29 45" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 57.1 (83088) - https://sketch.com -->
    <title>编组 11</title>
    <desc>Created with Sketch.</desc>
    <defs>
        <linearGradient x1="0%" y1="50%" x2="100%" y2="45.9475353%" id="linearGradient-1">
            <stop stop-color="#0088FF" offset="0%"></stop>
            <stop stop-color="#00FFFF" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="0%" y1="50%" x2="100%" y2="46.7217314%" id="linearGradient-2">
            <stop stop-color="#0088FF" offset="0%"></stop>
            <stop stop-color="#00FFFF" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="44.3914009%" y1="80.593484%" x2="65.0300255%" y2="29.6986153%" id="linearGradient-3">
            <stop stop-color="#0088FF" offset="0%"></stop>
            <stop stop-color="#00FFFF" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="3.35872681%" y1="62.5486648%" x2="73.964497%" y2="39.5790874%" id="linearGradient-4">
            <stop stop-color="#0088FF" offset="0%"></stop>
            <stop stop-color="#00FFFF" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="leap-up-1备份" transform="translate(-863.000000, -538.000000)">
            <g id="编组-11" transform="translate(863.000000, 538.000000)">
                <path d="M10.3767553,29.9912331 C11.500339,29.3069859 12.9054419,29.2812411 14.0533371,29.9238694 L19.5146283,32.9812738 C20.1397877,33.331258 20.3628614,34.121768 20.0128772,34.7469275 C19.9094503,34.9316739 19.7623763,35.0882975 19.5844927,35.203127 C18.4720742,35.921229 17.0520965,35.9592089 15.9028821,35.3015985 L10.4062601,32.156288 C9.80358593,31.8114221 9.59459102,31.0432891 9.9394569,30.4406149 C10.0449309,30.2562927 10.1953757,30.1016907 10.3767553,29.9912331 Z" id="矩形备份-5" fill-opacity="0.5" fill="#0088FF"></path>
                <polygon id="路径-9" fill="#024A95" points="9.77284205 29.949179 9.77284205 31.0112255 20.1707707 34.2316277 20.1707707 33.1627907"></polygon>
                <path d="M10.3767553,28.9214656 C11.500339,28.2372185 12.9054419,28.2114737 14.0533371,28.8541019 L19.5146283,31.9115064 C20.1397877,32.2614905 20.3628614,33.0520006 20.0128772,33.67716 C19.9094503,33.8619065 19.7623763,34.01853 19.5844927,34.1333596 C18.4720742,34.8514616 17.0520965,34.8894415 15.9028821,34.231831 L10.4062601,31.0865205 C9.80358593,30.7416546 9.59459102,29.9735216 9.9394569,29.3708475 C10.0449309,29.1865252 10.1953757,29.0319233 10.3767553,28.9214656 Z" id="矩形备份-5" fill="#006DCD"></path>
                <polygon id="矩形备份-6" fill-opacity="0.5" fill="#0088FF" points="-5.15143483e-14 35.9271675 -5.15143483e-14 34.8574001 4.24619331 32.0930233 14.9864729 38.5208343 14.9864729 39.5906017 10.7583973 42.5083689"></polygon>
                <polygon id="矩形备份-6" fill="url(#linearGradient-1)" points="-4.97379915e-14 34.8574001 4.24619331 32.0930233 14.9864729 38.5208343 10.7583973 41.4386015"></polygon>
                <path d="M15.670095,42.3230662 L15.670095,42.3230662 L15.670095,42.3230662 C16.1017934,41.984781 16.5029562,41.7755264 16.8735834,41.6953026 C17.4295243,41.5749668 18.094799,41.0981942 19.2090965,41.3161437 C19.3178622,41.3374175 19.4226339,41.361715 19.5234116,41.389036 C20.0936303,41.5436418 20.4305687,42.131218 20.27598,42.7014414 C20.2335286,42.8580295 20.1560164,43.0029106 20.0493089,43.1251213 L19.142048,44.1641952 C18.3327459,45.0910781 16.9773096,45.3085278 15.9186868,44.681312 L15.8378881,44.6334401 C15.1676926,44.2363608 14.9462881,43.3711636 15.3433674,42.7009681 C15.4289243,42.5565642 15.5395685,42.4285901 15.670095,42.3230662 Z" id="矩形备份-28" fill="#024A95"></path>
                <path d="M16.6524716,41.7512682 L17.9252339,41.3676209 C18.5982779,41.1647461 19.3255579,41.2534755 19.9300839,41.6122162 C20.2732132,41.8158377 20.3863067,42.2590667 20.1826853,42.6021961 C20.131977,42.6876463 20.0641869,42.7617178 19.9835529,42.81978 L19.267676,43.335262 C18.4046749,43.9566841 17.2395543,43.9512591 16.3823773,43.3218276 C15.9859181,43.0307047 15.9005262,42.4733093 16.1916491,42.0768501 C16.3059099,41.9212467 16.467637,41.8069827 16.6524716,41.7512682 Z" id="矩形备份-28" fill="url(#linearGradient-2)"></path>
                <polygon id="矩形" fill-opacity="0.4" fill="#00498A" points="14.9930961 31.0363595 16.0562403 32.3914142 17.1359353 31.8150692 17.1359353 29.6702781 14.9930961 28.3568357"></polygon>
                <polygon id="矩形" fill="#00498A" points="13.9219972 31.0757191 16.0648364 32.4307738 16.0648364 29.0199067 13.9219972 27.7145606"></polygon>
                <polygon id="矩形备份-20" fill="url(#linearGradient-3)" points="5.34883721 3.94351218e-13 3.20930233 1.06976744 3.20930233 22.6790698 26.5041674 36.8348928 28.6437023 35.7651254 28.6437023 14.1477789"></polygon>
                <polygon id="矩形备份-22" fill="#0088FF" points="3.20930233 1.06976744 3.20930233 22.6871139 26.5041674 36.8348928 26.5041674 15.2175463"></polygon>
                <polygon id="矩形备份-23" fill="url(#linearGradient-4)" points="5.34883721 5.34883721 5.34883721 21.3526961 24.6046512 33.1627907 24.6046512 17.1589318"></polygon>
            </g>
        </g>
    </g>
</svg>
  </div>
</template>

<script>
// 导入axios
import axios from "axios";

//特殊字符检验
export function checkSpecificKey(str, specialKey) {
  for (var i = 0; i < str.length; i++) {
    if (specialKey.indexOf(str.substr(i, 1)) != -1) {
      return true;
    }
  }
  return false;
}

export default {
  name: "Register",

  data() {
    var validatePass = (rule, value, callback) => {
      var specialKey = "!@#$%^&*()_+~";     //特殊字符
      var hasSpecialKey=/[!@#$%^&*()_+~]/;  //含有特殊字符
      var illegalKey=/[^0-9a-zA-Z!@#$%^&*()_+~]/; //出现不在合法字符集中的非法字符
      var hasLower=/[a-z]/;  //含有小写字母
      var hasUpper=/[A-Z]/;  //含有大写字母
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (value.length <= 7) {
          callback(new Error("最少八位密码"));
        } else if (!hasSpecialKey.test(value)) {
          callback(new Error("密码必须包含" + specialKey + "等特殊字符"));
        } else if(!hasLower.test(value)||!hasUpper.test(value)){
          callback(new Error("密码必须包含大小写字母"))
        } 
        else if(illegalKey.test(value)){
          callback(new Error("密码包含非法字符"))
        } else {
          if (this.ruleForm.checkPass !== "") {
            this.$refs.ruleForm.validateField("checkPass");
          }
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    var validateName=(rule,value,callback)=>{
      var reg=/[^\u4E00-\u9FA5a-zA-Z0-9]/g;
      if(reg.test(value)){
        callback(new Error("用户姓名包含非法字符"))
      }
      callback()
    };
    var validateId=(rule,value,callback)=>{
      var _reg=/[^a-zA-Z0-9]/;
      if(_reg.test(value)){
        callback(new Error("用户ID包含非法字符"))
      }
      callback()
    }
    return {
      ruleForm: {
        userId:"",
        userName: "",
        email: "",
        pass: "",
        checkPass: "",
      },
      rules: {
        userId:[
          { required: true, message: "请输入ID", trigger: "blur" },
          { validator:validateId, trigger:'blur'}
        ],
        userName: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { validator: validateName, trigger:'blur'},
        ],
        email: [
          { required: true, message: "请输入邮箱地址", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"],
          },
        ],
        pass: [{ required: true, validator: validatePass, trigger: "blur" }],
        checkPass: [
          { required: true, validator: validatePass2, trigger: "blur" },
        ],
      },
    
      formLabelAlign: {
        name: "",
        region: "",
        type: "",
      },
    };
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
      // 发送post请求，请求注册
      axios({
        method: "post",
        url: "http://localhost:8999/regist",
        data: {
          userId: this.ruleForm.userId,
          userName: this.ruleForm.userName,
          email: this.ruleForm.email,
          password: this.ruleForm.checkPass,
        },
      })
        .then((res) => {
          console.log("data..", res.data);
          // console.log(typeof(res.data))

          if (res.data == "1") {
            //转跳到登录页面
           this.$notify({
           title: "消息",
           message: "注册成功，请登录",
           type: "success",
           });
            this.$router.push({
              path: "/",
              query: {
                user: res.data,
              },
            });
          } 
          else if(res.data == "2"){
                       this.$notify({
           title: "消息",
           message: "注册失败",
           type: "warning",
           });
          }
          else if(res.data == "0"){
                       this.$notify({
           title: "消息",
           message: "用户ID已存在",
           type: "warning",
           });
          }
          
          else {
          this.$notify({
           title: "消息",
           message: "注册失败",
           type: "warning",
           });
          }
        })
        .catch((err) => {
          console.log("error...", err);
        });          
        } else {
          console.log("error submit!!");
         this.$notify({
           title: "消息",
           message: "请正确填写用户信息",
           type: "warning",
           });
        }
      });
    },
    login(){
            this.$router.push({
              path: "/",
            });      
    }
  },
};
</script>

<style>
.SVG1{
  position: fixed;
  bottom: 30px;
  left: 30px;
}
.SVG2{
  position: fixed;
  bottom: 30px;
  right: 30px;
}
.SVG3{
  position: fixed;
  bottom: 30px;
  right: 230px;
}
.SVG4{
  position: fixed;
  bottom: 50px;
  left: 250px;
}


.content {
  margin: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to right, #cce2f0, #a8e4fa);
}

.register {
  height: 100%;
  display: flex;
  width: 20%;
  margin: 0 auto;
}

.el-card {
  align-self: center;
  /* padding: 30px; */
  width: 100% !important;
}

.btn {
  font-size: 16px;
  /*margin: 15px auto;*/
  text-align: center;
  width: 100%;
  background-image: linear-gradient(to right, #51a4db, #a8e4fa);
  color: #fff;
  border: #fff none;
  border-radius: 0%;
  margin: 10px 0 !important;
}

.btn:hover {
  background: #a8e4fa !important;
}
</style>
