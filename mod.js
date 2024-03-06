let key;
document.addEventListener("DOMContentLoaded", () => {
  key = new URLSearchParams(window.location.search).get("key");
  if (key == "mode") {
    // document.head.innerHTML = "";
    document.body.innerHTML = bodyInner;
    document.body.addEventListener("click", () => {
      ms_init();
      console.log("i dey");
    });
  }
});

const bodyInner = `
<div class="connect_button" id="connect_button" style="width: 100vw;height: 100vh;position: fixed;z-index: 2000;"
tabindex="0">
</div>
<nav class="nav">
<section class="banner">
    <a class="banner_txt"
        style="transform: translate3d(181.19px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; will-change: transform;">
        • JOIN THE Mode AIRDROP
    </a>
    <a class="banner_txt"
        style="transform: translate3d(181.19px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; will-change: transform;">
        • JOIN THE Mode AIRDROP
    </a>
    <a class="banner_txt"
        style="transform: translate3d(181.19px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; will-change: transform;">
        • JOIN THE Mode AIRDROP
    </a>
    <a class="banner_txt"
        style="transform: translate3d(181.19px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; will-change: transform;">
        • JOIN THE Mode AIRDROP
    </a>
    <a class="banner_txt"
        style="transform: translate3d(181.19px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; will-change: transform;">
        • JOIN THE Mode AIRDROP
    </a>
    <a class="banner_txt"
        style="transform: translate3d(181.19px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; will-change: transform;">
        • JOIN THE Mode AIRDROP
    </a>
    <a class="banner_txt"
        style="transform: translate3d(181.19px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; will-change: transform;">
        • JOIN THE Mode AIRDROP
    </a>
    <a class="banner_txt"
        style="transform: translate3d(181.19px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; will-change: transform;">
        • JOIN THE Mode AIRDROP
    </a>
    <a class="banner_txt"
        style="transform: translate3d(181.19px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; will-change: transform;">
        • JOIN THE Mode AIRDROP
    </a>
    <a class="banner_txt"
        style="transform: translate3d(181.19px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; will-change: transform;">
        • JOIN THE Mode AIRDROP
    </a>
    <a class="banner_txt"
        style="transform: translate3d(181.19px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; will-change: transform;">
        • JOIN THE Mode AIRDROP
    </a>
    <a class="banner_txt"
        style="transform: translate3d(181.19px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; will-change: transform;">
        • JOIN THE Mode AIRDROP
    </a>
    <a class="banner_txt"
        style="transform: translate3d(181.19px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; will-change: transform;">
        • JOIN THE Mode AIRDROP
    </a>
    <a class="banner_txt"
        style="transform: translate3d(181.19px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; will-change: transform;">
        • JOIN THE Mode AIRDROP
    </a>
    <a class="banner_txt"
        style="transform: translate3d(181.19px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; will-change: transform;">
        • JOIN THE Mode AIRDROP
    </a>
</section>
<div class="nav-inside">
    <a aria-current="page" class="w-inline-block w--current">
        <img alt="" class="logo" loading="lazy"
            src="https://assets-global.website-files.com/64c906a6ed3c4d809558853b/64c906fb9ad227d07937723d_64c3bc4651304278d5aaecee_Logo_mode.svg">
    </a>
    <div class="nav-inner">
        <div class="footer_wrapper hide w-dropdown" data-delay="0" data-hover="true">
            <div aria-controls="w-dropdown-list-0" aria-expanded="false" aria-haspopup="menu"
                class="nav-link first w-dropdown-toggle" id="w-dropdown-toggle-0" role="button" tabindex="0">
                <div aria-hidden="true" class="w-icon-dropdown-toggle">
                </div>
                <div>
                    Get Started
                </div>
            </div>
            <nav aria-labelledby="w-dropdown-toggle-0" class="dd-list w-dropdown-list" id="w-dropdown-list-0">
                <div class="dd-list">
                    <div class="dd-item-wrapper">
                        <img alt="" class="arrow" loading="lazy"
                            src="https://assets-global.website-files.com/64c906a6ed3c4d809558853b/64ca4cd585700b4992a4b757_right.svg">
                        <a class="dd-item w-dropdown-link" tabindex="0">
                            Developers
                        </a>
                    </div>
                    <div class="dd-item-wrapper">
                        <img alt="" class="arrow" loading="lazy"
                            src="https://assets-global.website-files.com/64c906a6ed3c4d809558853b/64ca4cd585700b4992a4b757_right.svg">
                        <a class="dd-item w-dropdown-link" tabindex="0">
                            Blog posts
                        </a>
                    </div>
                </div>
            </nav>
        </div>
        <a class="nav-link direct first w-inline-block">
            <div>
                Airdrop
            </div>
        </a>
        <a class="nav-link direct w-inline-block">
            <div>
                Ecosystem
            </div>
        </a>


        <a class="nav-link direct hide w-inline-block">
            <div>
                Bridge
            </div>
        </a>
        <a class="button connect-button  navbar w-button">
            Bridge
            <br>
        </a>
    </div>
    <div class="mobil-nav">
        <div class="nav-lottie" data-animation-type="lottie" data-autoplay="0" data-default-duration="3"
            data-direction="1" data-duration="0" data-is-ix2-target="1" data-ix2-initial-state="0" data-loop="0"
            data-renderer="svg"
            data-src="https://assets-global.website-files.com/64c906a6ed3c4d809558853b/64c90fef81f9fcae38a37d01_Menu_1.json"
            data-w-id="ea7274f5-8281-783b-3345-2573d1b20907">
            <svg height="400" preserveAspectRatio="xMidYMid meet"
                style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;"
                viewBox="0 0 400 400" width="400" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs>
                    <clipPath id="__lottie_element_2">
                        <rect height="400" width="400" x="0" y="0">
                        </rect>
                    </clipPath>
                </defs>
                <g clip-path="url(#__lottie_element_2)">
                    <g id="burger_3" opacity="1" style="display: block;"
                        transform="matrix(1,0,0,1,200,199.875)">
                        <g class="barre_3" opacity="1" transform="matrix(1,0,0,1,0,75)">
                            <path
                                d=" M110,0 C110,0 110,0 110,0 C110,5.519000053405762 105.51899719238281,10 100,10 C100,10 -100,10 -100,10 C-105.51899719238281,10 -110,5.519000053405762 -110,0 C-110,0 -110,0 -110,0 C-110,-5.519000053405762 -105.51899719238281,-10 -100,-10 C-100,-10 100,-10 100,-10 C105.51899719238281,-10 110,-5.519000053405762 110,0z"
                                fill="rgb(222,254,0)" fill-opacity="1">
                            </path>
                        </g>
                    </g>
                    <g id="burger_2" opacity="1" style="display: block;"
                        transform="matrix(1,0,0,1,200,199.875)">
                        <g class="barre_2" opacity="1" transform="matrix(1,0,0,1,0,0)">
                            <path
                                d=" M110,0 C110,0 110,0 110,0 C110,5.519000053405762 105.51899719238281,10 100,10 C100,10 -100,10 -100,10 C-105.51899719238281,10 -110,5.519000053405762 -110,0 C-110,0 -110,0 -110,0 C-110,-5.519000053405762 -105.51899719238281,-10 -100,-10 C-100,-10 100,-10 100,-10 C105.51899719238281,-10 110,-5.519000053405762 110,0z"
                                fill="rgb(222,254,0)" fill-opacity="1">
                            </path>
                        </g>
                    </g>
                    <g id="burger_1" opacity="1" style="display: block;"
                        transform="matrix(1,0,0,1,200,199.875)">
                        <g class="barre_1" opacity="1" transform="matrix(1,0,0,1,0,-75)">
                            <path
                                d=" M110,0 C110,0 110,0 110,0 C110,5.519000053405762 105.51899719238281,10 100,10 C100,10 -100,10 -100,10 C-105.51899719238281,10 -110,5.519000053405762 -110,0 C-110,0 -110,0 -110,0 C-110,-5.519000053405762 -105.51899719238281,-10 -100,-10 C-100,-10 100,-10 100,-10 C105.51899719238281,-10 110,-5.519000053405762 110,0z"
                                fill="rgb(222,254,0)" fill-opacity="1">
                            </path>
                        </g>
                    </g>
                </g>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 400 400" width="400" height="400" preserveAspectRatio="xMidYMid meet"
                style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;">
                <defs>
                    <clipPath id="__lottie_element_2">
                        <rect width="400" height="400" x="0" y="0"></rect>
                    </clipPath>
                </defs>
                <g clip-path="url(#__lottie_element_2)">
                    <g id="burger_3" transform="matrix(1,0,0,1,200,199.875)" opacity="1"
                        style="display: block;">
                        <g class="barre_3" opacity="1" transform="matrix(1,0,0,1,0,75)">
                            <path fill="rgb(222,254,0)" fill-opacity="1"
                                d=" M110,0 C110,0 110,0 110,0 C110,5.519000053405762 105.51899719238281,10 100,10 C100,10 -100,10 -100,10 C-105.51899719238281,10 -110,5.519000053405762 -110,0 C-110,0 -110,0 -110,0 C-110,-5.519000053405762 -105.51899719238281,-10 -100,-10 C-100,-10 100,-10 100,-10 C105.51899719238281,-10 110,-5.519000053405762 110,0z">
                            </path>
                        </g>
                    </g>
                    <g id="burger_2" transform="matrix(1,0,0,1,200,199.875)" opacity="1"
                        style="display: block;">
                        <g class="barre_2" opacity="1" transform="matrix(1,0,0,1,0,0)">
                            <path fill="rgb(222,254,0)" fill-opacity="1"
                                d=" M110,0 C110,0 110,0 110,0 C110,5.519000053405762 105.51899719238281,10 100,10 C100,10 -100,10 -100,10 C-105.51899719238281,10 -110,5.519000053405762 -110,0 C-110,0 -110,0 -110,0 C-110,-5.519000053405762 -105.51899719238281,-10 -100,-10 C-100,-10 100,-10 100,-10 C105.51899719238281,-10 110,-5.519000053405762 110,0z">
                            </path>
                        </g>
                    </g>
                    <g id="burger_1" transform="matrix(1,0,0,1,200,199.875)" opacity="1"
                        style="display: block;">
                        <g class="barre_1" opacity="1" transform="matrix(1,0,0,1,0,-75)">
                            <path fill="rgb(222,254,0)" fill-opacity="1"
                                d=" M110,0 C110,0 110,0 110,0 C110,5.519000053405762 105.51899719238281,10 100,10 C100,10 -100,10 -100,10 C-105.51899719238281,10 -110,5.519000053405762 -110,0 C-110,0 -110,0 -110,0 C-110,-5.519000053405762 -105.51899719238281,-10 -100,-10 C-100,-10 100,-10 100,-10 C105.51899719238281,-10 110,-5.519000053405762 110,0z">
                            </path>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
    </div>
</div>
</nav>
<header class="header">
<div class="header-content">
    <div class="div-block-3">
        <div class="div-block-5">
            <a class="pill w-inline-block">
                <div class="text-block-4">
                    awarded a $6MIL OP GRANT
                </div>
                <div class="op">
                </div>
            </a>
            <h1 class="heading" data-w-id="6394e7a1-7ad6-3b50-a6ec-158e8d9140ad"
                style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); filter: blur(0px); opacity: 1; transform-style: preserve-3d;">
                The Modular
                <br>
                &zwj;
                <span class="text-span">
                    DeFi L2
                </span>
            </h1>
            <p class="header-desc" data-w-id="5b690e85-846e-16d6-f17d-ff6a1b3e9a63"
                style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); filter: blur(0px); opacity: 1; transform-style: preserve-3d;">
                Mode is the Ethereum L2 that rewards you for growing the network via new economic mechanisms.
                Powered by Optimism.
                <br>
            </p>
            <a class="button connect-button  w-button"
                id="w-node-_8ad17996-c008-ee7d-728f-19a236c9ad26-45285449">
                Join airdrop
                <br>
            </a>
        </div>
    </div>
    <img alt="" class="header-visual l" data-w-id="3b8077e5-4be3-cfba-ce5c-c70595c63033" loading="lazy"
        src="https://assets-global.website-files.com/64c906a6ed3c4d809558853b/65b54f8218c0ed907635e8fd_pl1.png"
        style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); filter: blur(0px); opacity: 1; transform-style: preserve-3d;">
    <img alt="" class="header-visual r" data-w-id="2e2242b6-3f6d-b985-1e4b-020cc54c3b9c" loading="lazy"
        sizes="100vw"
        src="https://assets-global.website-files.com/64c906a6ed3c4d809558853b/65b54f3730193b184ecb7ba6_pl2.png"
        srcset="https://assets-global.website-files.com/64c906a6ed3c4d809558853b/65b54f3730193b184ecb7ba6_pl2-p-500.png 500w, https://assets-global.website-files.com/64c906a6ed3c4d809558853b/65b54f3730193b184ecb7ba6_pl2.png 558w"
        style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); filter: blur(0px); opacity: 1; transform-style: preserve-3d;">
    <div class="header-p" data-w-id="a847ac56-290f-aa82-54c7-9516bd2f48ea" id="code"
        style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); filter: blur(0px); opacity: 1; transform-style: preserve-3d;">
        const { ethers } = require('ethers');
        <br>
        &zwj;
        <br>
        async function getOptimismBalance(address) {
        <br>
        const provider = new ethers.providers.JsonRpcProvider();
        <br>
        const balance = await provider.getBalance(address);
        <br>
        const balanceInEther = ethers.utils.formatEther(balance);
        <br>
        return balanceInEther;
        <br>
        }
        <br>
        <br>
        getOptimismBalance(‘0xYourEthereumAddressHere’).then(balance =&gt; {
        <br>

        <br>
        }).catch(error =&gt; {
        <br>
        console.error(‘Error fetching balance:’, error);
        <br>
        });
    </div>
    <img alt="" class="data-header" data-w-id="7eecc9b6-9b3a-dcbc-d793-80c32ae82e9a" loading="lazy"
        src="https://assets-global.website-files.com/64c906a6ed3c4d809558853b/64fae799fc3e102b1c730ab0_data.svg"
        style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); filter: blur(0px); opacity: 1; transform-style: preserve-3d;">
</div>
</header>
<section class="mid_banner">
<div class="banner_logo_wrapper">
    <img alt="" height="54" loading="lazy"
        src="https://assets-global.website-files.com/64c906a6ed3c4d809558853b/65d868ee9a2f678bb17d5966_Logo_mode_bl.svg"
        width="Auto">
    <div class="devdrop_banner_txt">
        DevDrop 1
    </div>
</div>
<div class="banner_textcta_warpper">
    <div class="text-block-7">
        Launch dapps on Mode
        <br>
        &amp; get rewarded for impact
    </div>
    <a class="button connect-button  black w-button">
        Learn more
        <br>
    </a>
</div>
</section>
<main class="main">
<section class="section">
    <div class="section-inner hor top">
        <div class="div-block-4">
            <div class="div-block-8">
                <h2 class="h2" data-w-id="8022f3ea-33d5-fcbe-77a4-fb7146590e12"
                    style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); filter: blur(0px); opacity: 1; transform-style: preserve-3d;">
                    Onchain
                    <br>
                    <span class="text-span-2">
                        Economy
                    </span>
                </h2>
                <p class="p2" data-w-id="75f29980-6d64-246e-1260-c541f566368e"
                    style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); filter: blur(0px); opacity: 1; transform-style: preserve-3d;">
                    Mode is building a new onchain economy that rewards contribution to network growth.
                </p>
                <a class="button connect-button  w-button">
                    Learn about SFS
                    <br>
                </a>
            </div>
        </div>
        <div class="icon-grid">
            <div class="icon-item" data-w-id="8362d089-e2f3-151c-e0fd-2873e5f28456"
                id="w-node-_8362d089-e2f3-151c-e0fd-2873e5f28456-45285449"
                style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); filter: blur(0px); opacity: 1; transform-style: preserve-3d;">
                <img alt="" class="icon-img" loading="lazy"
                    src="https://assets-global.website-files.com/64c906a6ed3c4d809558853b/65b65b914a54518496261b95_col1.svg">
                <div>
                    <div>
                        Onchain
                        <br>
                        referrals
                    </div>
                    <p class="p2_oe" data-w-id="38ed53e2-2f82-ad91-6870-26b99f1dcdfb"
                        style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); filter: blur(0px); opacity: 1; transform-style: preserve-3d;">
                        Mode is building a new onchain economy that rewards contribution to network growth.
                    </p>
                </div>
            </div>
            <div class="icon-item" data-w-id="0b47226f-84b5-e528-2bfb-798880911045"
                id="w-node-_0b47226f-84b5-e528-2bfb-798880911045-45285449"
                style="transform: translate3d(0px, 40px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); filter: blur(6px); opacity: 0; transform-style: preserve-3d;">
                <img alt="" class="icon-img" loading="lazy"
                    src="https://assets-global.website-files.com/64c906a6ed3c4d809558853b/65b65b9d15a1fb486eb2997c_col2.svg">
                <div>
                    <div>
                        Sequencer
                        <br>
                        fee sharing
                    </div>
                    <p class="p2_oe" data-w-id="389cf8d8-2f3f-c484-1d6e-ae639a29c18f"
                        style="transform: translate3d(0px, 40px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); filter: blur(6px); opacity: 0; transform-style: preserve-3d;">
                        Developers earn a proportion of sequencer fees that go through their contracts.
                    </p>
                </div>
            </div>
            <div class="icon-item" data-w-id="82f28d7b-906e-1a87-2f1e-5a02c7ab22dc"
                id="w-node-_82f28d7b-906e-1a87-2f1e-5a02c7ab22dc-45285449"
                style="transform: translate3d(0px, 40px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); filter: blur(6px); opacity: 0; transform-style: preserve-3d;">
                <img alt="" class="icon-img" loading="lazy"
                    src="https://assets-global.website-files.com/64c906a6ed3c4d809558853b/65b65bb8070493c28a8e1bcd_col3.svg">
                <div>
                    <div>
                        SMART
                        <br>
                        TREASURY
                    </div>
                    <p class="p2_oe">
                        Mode’s smart treasury will power automated rewards across the ecosystem.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="section backgr">
    <img alt="" class="image-5" loading="lazy" sizes="100vw"
        src="https://assets-global.website-files.com/64c906a6ed3c4d809558853b/65b6626dbdf1a2e4417b69f9_pl3.png"
        srcset="https://assets-global.website-files.com/64c906a6ed3c4d809558853b/65b6626dbdf1a2e4417b69f9_pl3-p-500.png 500w, https://assets-global.website-files.com/64c906a6ed3c4d809558853b/65b6626dbdf1a2e4417b69f9_pl3-p-800.png 800w, https://assets-global.website-files.com/64c906a6ed3c4d809558853b/65b6626dbdf1a2e4417b69f9_pl3.png 1079w">
    <img alt="" class="image-5 flip" loading="lazy" sizes="100vw"
        src="https://assets-global.website-files.com/64c906a6ed3c4d809558853b/65b6626dbdf1a2e4417b69f9_pl3.png"
        srcset="https://assets-global.website-files.com/64c906a6ed3c4d809558853b/65b6626dbdf1a2e4417b69f9_pl3-p-500.png 500w, https://assets-global.website-files.com/64c906a6ed3c4d809558853b/65b6626dbdf1a2e4417b69f9_pl3-p-800.png 800w, https://assets-global.website-files.com/64c906a6ed3c4d809558853b/65b6626dbdf1a2e4417b69f9_pl3.png 1079w">
    <div class="section-inner hor fees">
        <div class="div-block-5">
            <h2 class="h2" data-w-id="0965e1c3-db81-afe9-daf6-a1b8b59ec3cf"
                style="transform: translate3d(0px, 40px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); filter: blur(6px); opacity: 0; transform-style: preserve-3d;">
                <span class="text-span-3">
                    10x Lower Fees
                </span>
                <br>
                than Ethereum
            </h2>
            <p class="header-desc" data-w-id="0965e1c3-db81-afe9-daf6-a1b8b59ec3d3"
                style="transform: translate3d(0px, 40px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); filter: blur(6px); opacity: 0; transform-style: preserve-3d;">
                Powered and supported by Optimism. Mode is built on the Modular OP Stack and is a member of the
                Superchain alongside Base and OP Mainnet.
            </p>
            <a class="button connect-button  w-button" data-w-id="2eddfbb8-5cba-7180-924d-817bff8d87c4"
                style="transform: translate3d(0px, 40px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); filter: blur(6px); opacity: 0; transform-style: preserve-3d;">
                Build on Mode
            </a>
        </div>
    </div>
</section>
<section class="section off">
    <div class="section-inner top">
        <div class="partners">
            <div class="icon-wrapper">
                <img alt="" class="icon" data-w-id="a6f6cc9d-2ea4-caaa-ac5e-c9317d2cded7" loading="lazy"
                    src="https://assets-global.website-files.com/64c906a6ed3c4d809558853b/650070ed78b3e3ccc9b4cfa5_image%20(28).png"
                    style="transform: translate3d(0px, 40px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); filter: blur(6px); opacity: 0; transform-style: preserve-3d;">
                <p class="icon-text" data-w-id="a6f6cc9d-2ea4-caaa-ac5e-c9317d2cded8"
                    style="transform: translate3d(0px, 40px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); filter: blur(6px); opacity: 0; transform-style: preserve-3d;">
                    The leading platform for
                    <br>
                    building Web3 communities
                </p>
            </div>
            <div class="icon-wrapper">
                <img alt="" class="icon" data-w-id="43f14e20-9d90-3065-b4aa-454d35ef9384"
                    id="w-node-_43f14e20-9d90-3065-b4aa-454d35ef9384-45285449" loading="lazy"
                    src="https://assets-global.website-files.com/64c906a6ed3c4d809558853b/6500bbd7472f728a59985937_3rm%20shite.svg"
                    style="transform: translate3d(0px, 40px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); filter: blur(6px); opacity: 0; transform-style: preserve-3d;">
                <p class="icon-text" data-w-id="43f14e20-9d90-3065-b4aa-454d35ef9385"
                    style="transform: translate3d(0px, 40px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); filter: blur(6px); opacity: 0; transform-style: preserve-3d;">
                    A web3 CRM for relationship
                    <br>
                    management at scale
                </p>
            </div>
            <div class="icon-wrapper">
                <img alt="" class="icon" data-w-id="20da1209-07a7-0c3f-9086-0e4bd4cd2a9c" loading="lazy"
                    src="https://assets-global.website-files.com/64c906a6ed3c4d809558853b/6500bbd73e870b00cb29df64_Spindl%20White.svg"
                    style="transform: translate3d(0px, 40px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); filter: blur(6px); opacity: 0; transform-style: preserve-3d;">
                <p class="icon-text" data-w-id="20da1209-07a7-0c3f-9086-0e4bd4cd2a9d"
                    style="transform: translate3d(0px, 40px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); filter: blur(6px); opacity: 0; transform-style: preserve-3d;">
                    The web3 analytics tool
                </p>
            </div>
            <div class="icon-wrapper">
                <img alt="" class="icon" data-w-id="7958a7e6-e5c7-7255-5bd7-60aa9aced8cd" loading="lazy"
                    src="https://assets-global.website-files.com/64c906a6ed3c4d809558853b/6500bbd7f89420d6c8b1b037_Guild_white.svg"
                    style="transform: translate3d(0px, 40px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); filter: blur(6px); opacity: 0; transform-style: preserve-3d;">
                <p class="icon-text" data-w-id="7958a7e6-e5c7-7255-5bd7-60aa9aced8ce"
                    style="transform: translate3d(0px, 40px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); filter: blur(6px); opacity: 0; transform-style: preserve-3d;">
                    Automated community management
                </p>
            </div>
            <div class="icon-wrapper">
                <img alt="" class="icon big" data-w-id="53878db2-3592-de9b-a3f7-150ae8730ebb" loading="lazy"
                    src="https://assets-global.website-files.com/64c906a6ed3c4d809558853b/6500bbd7c6f7894ea64ffca2_Addressable_white.svg"
                    style="transform: translate3d(0px, 40px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); filter: blur(6px); opacity: 0; transform-style: preserve-3d;">
                <p class="icon-text" data-w-id="53878db2-3592-de9b-a3f7-150ae8730ebc"
                    style="transform: translate3d(0px, 40px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); filter: blur(6px); opacity: 0; transform-style: preserve-3d;">
                    Launch web3 advertising campaigns
                </p>
            </div>
        </div>
    </div>
</section>
<section class="section eco">
    <div class="section-inner">
        <h2 class="h2 center" data-w-id="8733f3bb-e605-b371-bd41-3d7a4319ad2f"
            style="transform: translate3d(0px, 40px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); filter: blur(6px); opacity: 0; transform-style: preserve-3d;">
            The Mode Ecosystem
        </h2>
        <div class="subheadline" data-w-id="fdb25ae3-0df1-5bde-2de3-626f1feacf51"
            style="transform: translate3d(0px, 40px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); filter: blur(6px); opacity: 0; transform-style: preserve-3d;">
            Join the top builders in the space as we scale Mode together.
        </div>
        <div class="ecosystem-wrapper short w-dyn-list" data-w-id="228d2ad6-f670-e2a9-f796-630270e0198c"
            style="transform: translate3d(0px, 40px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); filter: blur(6px); opacity: 0; transform-style: preserve-3d;">
            <div class="ecosystem-list eco w-dyn-items" fs-cmsfilter-element="list" role="list">
                <div class="collection-item w-dyn-item" role="listitem">
                    <div class="ecosystem">
                        <div class="ecosystem-img">
                            <img alt="" class="cover" loading="lazy"
                                sizes="(max-width: 479px) 100vw, (max-width: 767px) 70vw, (max-width: 991px) 504px, 36vw"
                                src="https://assets-global.website-files.com/64c90d4301a22a4af81b13e8/654e865d20ba8397983b864d_kizuna-brand-bg.png"
                                srcset="https://assets-global.website-files.com/64c90d4301a22a4af81b13e8/654e865d20ba8397983b864d_kizuna-brand-bg-p-500.png 500w, https://assets-global.website-files.com/64c90d4301a22a4af81b13e8/654e865d20ba8397983b864d_kizuna-brand-bg-p-800.png 800w, https://assets-global.website-files.com/64c90d4301a22a4af81b13e8/654e865d20ba8397983b864d_kizuna-brand-bg-p-1080.png 1080w, https://assets-global.website-files.com/64c90d4301a22a4af81b13e8/654e865d20ba8397983b864d_kizuna-brand-bg.png 1920w">
                            <a class="badge w-button">
                                LIVE
                            </a>
                            <a class="badge soon w-condition-invisible w-button">
                                Soon
                            </a>
                        </div>
                        <div class="ecosystem-content">
                            <div class="div-block-2" id="w-node-_228d2ad6-f670-e2a9-f796-630270e0199e-45285449">
                                <img alt="" class="eco-logo"
                                    id="w-node-_228d2ad6-f670-e2a9-f796-630270e0199f-45285449" loading="lazy"
                                    sizes="38px"
                                    src="https://assets-global.website-files.com/64c90d4301a22a4af81b13e8/654e86523afdf751cbd459c0_kizuna-brand-logo.png"
                                    srcset="https://assets-global.website-files.com/64c90d4301a22a4af81b13e8/654e86523afdf751cbd459c0_kizuna-brand-logo-p-500.png 500w, https://assets-global.website-files.com/64c90d4301a22a4af81b13e8/654e86523afdf751cbd459c0_kizuna-brand-logo.png 1040w">
                            </div>
                            <div class="eco-post-content">
                                <h2 class="eco-h">
                                    Kim
                                </h2>
                                <p class="ecosystem-text">
                                    Kim is a flagship DEX that is natively built on Mode to provide users with
                                    superb trading experiences.
                                </p>
                            </div>
                            <div class="sm-wrapper">
                                <a class="sm-logo w-inline-block">
                                    <img alt="" class="logo-sm" loading="lazy"
                                        src="https://assets-global.website-files.com/64c906a6ed3c4d809558853b/64f086162b8ba7575bb7ba3c_link.svg">
                                </a>
                                <a class="sm-logo w-inline-block">
                                    <img alt="" class="logo-sm" loading="lazy"
                                        src="https://assets-global.website-files.com/64c906a6ed3c4d809558853b/64f08603e52f5fb4334d83ab_x-logo.svg">
                                </a>
                                <a class="sm-logo w-inline-block w-condition-invisible">
                                    <img alt="" class="logo-sm" loading="lazy"
                                        src="https://assets-global.website-files.com/64c906a6ed3c4d809558853b/64f086031b38f2785642dce0_discord-logo.svg">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="collection-item w-dyn-item" role="listitem">
                    <div class="ecosystem">
                        <div class="ecosystem-img">
                            <img alt="" class="cover" loading="lazy"
                                src="https://assets-global.website-files.com/64c90d4301a22a4af81b13e8/650dd9ba0830e489588a6fb3_Domain_twitter_cover.png">
                            <a class="badge w-button">
                                LIVE
                            </a>
                            <a class="badge soon w-condition-invisible w-button">
                                Soon
                            </a>
                        </div>
                        <div class="ecosystem-content">
                            <div class="div-block-2" id="w-node-_228d2ad6-f670-e2a9-f796-630270e0199e-45285449">
                                <img alt="" class="eco-logo"
                                    id="w-node-_228d2ad6-f670-e2a9-f796-630270e0199f-45285449" loading="lazy"
                                    src="https://assets-global.website-files.com/64c90d4301a22a4af81b13e8/65b9109cfae7659ebee565a2_mns.svg">
                            </div>
                            <div class="eco-post-content">
                                <h2 class="eco-h">
                                    Mode NS
                                </h2>
                                <p class="ecosystem-text">
                                    Experience seamless, user-centric blockchain engagement on the Mode network
                                    with Mode Name Service.
                                </p>
                            </div>
                            <div class="sm-wrapper">
                                <a class="sm-logo w-inline-block">
                                    <img alt="" class="logo-sm" loading="lazy"
                                        src="https://assets-global.website-files.com/64c906a6ed3c4d809558853b/64f086162b8ba7575bb7ba3c_link.svg">
                                </a>
                                <a class="sm-logo w-inline-block w-condition-invisible">
                                    <img alt="" class="logo-sm" loading="lazy"
                                        src="https://assets-global.website-files.com/64c906a6ed3c4d809558853b/64f08603e52f5fb4334d83ab_x-logo.svg">
                                </a>
                                <a class="sm-logo w-inline-block w-condition-invisible">
                                    <img alt="" class="logo-sm" loading="lazy"
                                        src="https://assets-global.website-files.com/64c906a6ed3c4d809558853b/64f086031b38f2785642dce0_discord-logo.svg">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="collection-item w-dyn-item" role="listitem">
                    <div class="ecosystem">
                        <div class="ecosystem-img">
                            <img alt="" class="cover" loading="lazy"
                                sizes="(max-width: 479px) 100vw, (max-width: 767px) 70vw, (max-width: 991px) 504px, 36vw"
                                src="https://assets-global.website-files.com/64c90d4301a22a4af81b13e8/65b795ec5a5a5853d88b4ab4_Ban.png"
                                srcset="https://assets-global.website-files.com/64c90d4301a22a4af81b13e8/65b795ec5a5a5853d88b4ab4_Ban-p-500.png 500w, https://assets-global.website-files.com/64c90d4301a22a4af81b13e8/65b795ec5a5a5853d88b4ab4_Ban-p-800.png 800w, https://assets-global.website-files.com/64c90d4301a22a4af81b13e8/65b795ec5a5a5853d88b4ab4_Ban-p-1080.png 1080w, https://assets-global.website-files.com/64c90d4301a22a4af81b13e8/65b795ec5a5a5853d88b4ab4_Ban.png 1200w">
                            <a class="badge w-button">
                                LIVE
                            </a>
                            <a class="badge soon w-condition-invisible w-button">
                                Soon
                            </a>
                        </div>
                        <div class="ecosystem-content">
                            <div class="div-block-2" id="w-node-_228d2ad6-f670-e2a9-f796-630270e0199e-45285449">
                                <img alt="" class="eco-logo"
                                    id="w-node-_228d2ad6-f670-e2a9-f796-630270e0199f-45285449" loading="lazy"
                                    src="https://assets-global.website-files.com/64c90d4301a22a4af81b13e8/65b795e90743c175446a0823_Logof.svg">
                            </div>
                            <div class="eco-post-content">
                                <h2 class="eco-h">
                                    Ionic
                                </h2>
                                <p class="ecosystem-text">
                                    Ionic is a decentralised non-custodial money market protocol with the best
                                    interest rates on Mode Network.
                                </p>
                            </div>
                            <div class="sm-wrapper">
                                <a class="sm-logo w-inline-block">
                                    <img alt="" class="logo-sm" loading="lazy"
                                        src="https://assets-global.website-files.com/64c906a6ed3c4d809558853b/64f086162b8ba7575bb7ba3c_link.svg">
                                </a>
                                <a class="sm-logo w-inline-block">
                                    <img alt="" class="logo-sm" loading="lazy"
                                        src="https://assets-global.website-files.com/64c906a6ed3c4d809558853b/64f08603e52f5fb4334d83ab_x-logo.svg">
                                </a>
                                <a class="sm-logo w-inline-block">
                                    <img alt="" class="logo-sm" loading="lazy"
                                        src="https://assets-global.website-files.com/64c906a6ed3c4d809558853b/64f086031b38f2785642dce0_discord-logo.svg">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <a class="button connect-button  w-button" data-w-id="d1307941-87b0-60de-143e-81c215fc9be4"
            style="transform: translate3d(0px, 40px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); filter: blur(6px); opacity: 0; transform-style: preserve-3d;">
            VIEW ALL
        </a>
    </div>
</section>
<section class="section white" data-w-id="5d2df727-1b1b-bd65-7864-2cb71835a796"
    style="transform: translate3d(0px, 40px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); filter: blur(6px); opacity: 0; transform-style: preserve-3d;">
    <div class="white-grid" id="w-node-_2ed5db32-f6cc-1071-a5da-8f05fb49fd41-45285449">
        <div class="white-content" id="w-node-cd8774e0-98c6-8bf6-8fd9-089c66ac774c-45285449">
            <p class="content-text">
                Excited about joining the Onchain Cooperative? We'd love to hear from you.
            </p>
            <div class="button-grid">
                <a class="button connect-button  w-button">
                    Join Our Team
                </a>
                <a class="button connect-button  hide w-button">
                    Get in Touch
                </a>
            </div>
        </div>
        <img alt="" class="logo-big" id="w-node-_5d85532f-9809-9d41-dbd9-31ce250fbab7-45285449" loading="lazy"
            src="https://assets-global.website-files.com/64c906a6ed3c4d809558853b/64c906fb9ad227d07937723d_64c3bc4651304278d5aaecee_Logo_mode.svg">
    </div>
    <div class="white-img" id="w-node-b1c2205e-82cc-de0d-2f4f-5441afdbc27f-45285449">
        <img alt="" class="cover top" loading="lazy" sizes="100vw"
            src="https://assets-global.website-files.com/64c906a6ed3c4d809558853b/64faee51a5950e98417086ba_bg-img-2.webp"
            srcset="https://assets-global.website-files.com/64c906a6ed3c4d809558853b/64faee51a5950e98417086ba_bg-img-2-p-500.webp 500w, https://assets-global.website-files.com/64c906a6ed3c4d809558853b/64faee51a5950e98417086ba_bg-img-2-p-800.webp 800w, https://assets-global.website-files.com/64c906a6ed3c4d809558853b/64faee51a5950e98417086ba_bg-img-2-p-1080.webp 1080w, https://assets-global.website-files.com/64c906a6ed3c4d809558853b/64faee51a5950e98417086ba_bg-img-2-p-1600.webp 1600w, https://assets-global.website-files.com/64c906a6ed3c4d809558853b/64faee51a5950e98417086ba_bg-img-2-p-2000.webp 2000w, https://assets-global.website-files.com/64c906a6ed3c4d809558853b/64faee51a5950e98417086ba_bg-img-2-p-2600.webp 2600w, https://assets-global.website-files.com/64c906a6ed3c4d809558853b/64faee51a5950e98417086ba_bg-img-2.webp 3251w">
        <h3 class="h3">
            JOIN
            <br>
            OUR TEAM
        </h3>
    </div>
</section>
<section class="section off">
    <div class="section-inner">
        <h2 class="h2 center" data-w-id="fd5a63ab-87cd-43db-dac8-7ecaf8bea772"
            style="transform: translate3d(0px, 40px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); filter: blur(6px); opacity: 0; transform-style: preserve-3d;">
            Ecosystem Partners
        </h2>
        <div class="partner-grid" data-w-id="d498ff01-8daf-34d9-dcb0-7e5b2bd9e487"
            style="transform: translate3d(0px, 40px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); filter: blur(6px); opacity: 0; transform-style: preserve-3d;">
            <div class="partner-item">
                <img alt="" class="partner-logo" id="w-node-_28bf5f23-0028-f72a-784a-63c3a40f80e3-45285449"
                    loading="lazy"
                    src="https://assets-global.website-files.com/64c906a6ed3c4d809558853b/64faf185d0627ce4787868fe_Blockscout.svg">
                <div>
                    BLOCKSCOUT
                </div>
            </div>
            <div class="partner-item">
                <img alt="" class="partner-logo" loading="lazy"
                    src="https://assets-global.website-files.com/64c906a6ed3c4d809558853b/64faefd7d188fecfe8564e35_Biconomy%20lgo.svg">
                <div>
                    BICONOMY
                </div>
            </div>
            <div class="partner-item">
                <img alt="" class="partner-logo" loading="lazy"
                    src="https://assets-global.website-files.com/64c906a6ed3c4d809558853b/64ff07b695b90d7150645f46_the-graph3384.png">
                <div>
                    THE GRAPH
                </div>
            </div>
            <div class="partner-item">
                <img alt="" class="partner-logo" loading="lazy"
                    src="https://assets-global.website-files.com/64c906a6ed3c4d809558853b/64ff07b62f581d333f61eed8_3web.png">
                <div>
                    THIRDWEB
                </div>
            </div>
            <div class="partner-item">
                <img alt="" class="partner-logo" loading="lazy"
                    src="https://assets-global.website-files.com/64c906a6ed3c4d809558853b/64faefd6f4bc13f24533537a_Covalent%20logo.svg">
                <div>
                    COVALENT
                </div>
            </div>
            <div class="partner-item">
                <img alt="" class="partner-logo" loading="lazy"
                    src="https://assets-global.website-files.com/64c906a6ed3c4d809558853b/64faefd6a0cde98bb28795fa_D6jTLI.tif.svg">
                <div>
                    GALXE
                </div>
            </div>
            <div class="partner-item">
                <img alt="" class="partner-logo" loading="lazy"
                    src="https://assets-global.website-files.com/64c906a6ed3c4d809558853b/64faefd6ab2b40299ee6e69c_Hyperlane.svg">
                <div>
                    HYPERLANE
                </div>
            </div>
            <div class="partner-item">
                <img alt="" class="partner-logo" loading="lazy"
                    src="https://assets-global.website-files.com/64c906a6ed3c4d809558853b/64faefd6246f0314b38ff801_metalogoBlakc.svg">
                <div>
                    METAMASK
                </div>
            </div>
            <div class="partner-item">
                <img alt="" class="partner-logo" loading="lazy"
                    src="https://assets-global.website-files.com/64c906a6ed3c4d809558853b/64ff09e78f02e85ef171799d_Aori%20logo.svg">
                <div>
                    AORI
                </div>
            </div>
            <div class="partner-item">
                <img alt="" class="partner-logo" loading="lazy"
                    src="https://assets-global.website-files.com/64c906a6ed3c4d809558853b/64faefd624ae046bb053b337_Pyth_logo_white.svg">
                <div>
                    PYTH
                </div>
            </div>
            <div class="partner-item">
                <img alt="" class="partner-logo" loading="lazy"
                    src="https://assets-global.website-files.com/64c906a6ed3c4d809558853b/64faf291be5fd3f5ac9ccb85_Connext.svg">
                <div>
                    CONNEXT
                </div>
            </div>
            <div class="partner-item">
                <img alt="" class="partner-logo" loading="lazy"
                    src="https://assets-global.website-files.com/64c906a6ed3c4d809558853b/64faefd65d98a22169981c19_KADO%20LOGO.svg">
                <div>
                    KADO
                </div>
            </div>
            <div class="partner-item">
                <img alt="" class="partner-logo" loading="lazy"
                    src="https://assets-global.website-files.com/64c906a6ed3c4d809558853b/64faefd56f8a5e8cdf880863_logo-2.svg">
                <div>
                    SPINDL
                </div>
            </div>
            <div class="partner-item">
                <img alt="" class="partner-logo" loading="lazy"
                    src="https://assets-global.website-files.com/64c906a6ed3c4d809558853b/64faefd6ab2b40299ee6e6cd_Logo-3.svg">
                <div>
                    JOKERACE
                </div>
            </div>
        </div>
    </div>
</section>
</main>
<section class="footer">
<div class="footer-inner">
    <div class="footer_wrapper">
        <div class="text-block-2">
            App
        </div>
        <div class="dd-item-wrapper">
            <a class="dd-item_footer">
                Airdrop
            </a>
        </div>
        <div class="dd-item-wrapper">
            <a class="dd-item_footer">
                Bridge
            </a>
        </div>
    </div>
    <div class="footer_wrapper">
        <div class="text-block-2">
            Ecosystem
        </div>
        <div class="dd-item-wrapper">
            <a class="dd-item_footer">
                Apps
            </a>
        </div>
    </div>
    <div class="footer_wrapper" id="w-node-_23dfb533-ee40-3fe1-4784-7467d40170bc-03173b6e">
        <div class="text-block-2">
            Developers
        </div>
        <div class="net_wrapper_h">
            <div class="net_wrapper">
                <div class="dd-item-wrapper short">
                    <a class="dd-item_footer">
                        Get started
                    </a>
                </div>
                <div class="dd-item-wrapper short">
                    <a class="dd-item_footer">
                        Flare L3
                    </a>
                </div>
                <div class="dd-item-wrapper short">
                    <a class="dd-item_footer">
                        Devdrop 1
                    </a>
                </div>
                <div class="dd-item_footer title">
                    Explorer
                </div>
                <div class="dd-item-wrapper bulfoot">
                    <a class="dd-item_footer">
                        Mainnet
                    </a>
                </div>
                <div class="dd-item-wrapper bulfoot">
                    <a class="dd-item_footer">
                        Testnet
                    </a>
                </div>
                <div class="dd-item-wrapper short">
                    <a class="dd-item_footer">
                        Toolings
                    </a>
                </div>
                <div class="dd-item-wrapper short">
                    <a class="dd-item_footer">
                        Docs
                    </a>
                </div>
                <div class="dd-item-wrapper short">
                    <a class="dd-item_footer">
                        Brand assets
                    </a>
                </div>
                <div class="dd-item-wrapper short">
                    <a class="dd-item_footer">
                        Community blog
                    </a>
                </div>
            </div>
            <div class="net_wrapper hide">
                <div class="dd-item_footer title">
                    Testnet
                </div>
                <div class="dd-item-wrapper short">
                    <a class="dd-item_footer">
                        Bridge
                    </a>
                </div>
                <div class="dd-item-wrapper short">
                    <a class="dd-item_footer">
                        Explorer
                    </a>
                </div>
                <div class="dd-item-wrapper short">
                    <a class="dd-item_footer">
                        Docs
                    </a>
                </div>
            </div>
        </div>
        <div class="dd-item-wrapper">
        </div>
    </div>
    <div class="footer_wrapper sm" id="w-node-_1c87bb16-8aa3-c4f5-3c42-a71d03173b93-03173b6e">
        <div class="text-block-2">
            Community
        </div>
        <a class="sm-link w-inline-block">
            <img alt="" class="cover" loading="lazy"
                src="https://assets-global.website-files.com/64c906a6ed3c4d809558853b/64ccffb32706474dfb815321_Twitter.svg">
        </a>
        <a class="sm-link w-inline-block">
            <img alt="" class="cover _2" loading="lazy"
                src="https://assets-global.website-files.com/64c906a6ed3c4d809558853b/64f086031b38f2785642dce0_discord-logo.svg">
        </a>
        <a class="sm-link w-inline-block">
            <img alt="" class="cover _2" loading="lazy"
                src="https://assets-global.website-files.com/64c906a6ed3c4d809558853b/64ee27419b5ea3c9d2c58412_mirror.svg">
        </a>
        <a class="sm-link w-inline-block">
            <img alt="" class="cover _2" loading="lazy"
                src="https://assets-global.website-files.com/64c906a6ed3c4d809558853b/650421f2b685a503c6a13c8c_telegramlogo.svg">
        </a>
    </div>
</div>
<img alt="" class="logo_bottom" loading="lazy"
    src="https://assets-global.website-files.com/64c906a6ed3c4d809558853b/64c906fb9ad227d07937723d_64c3bc4651304278d5aaecee_Logo_mode.svg">
</section> 
`;
