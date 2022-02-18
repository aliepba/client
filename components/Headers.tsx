import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import {FiArrowUpRight} from 'react-icons/fi'
import {AiOutlineDown} from 'react-icons/ai'
import {HiOutlineDotsVertical} from 'react-icons/hi'
import ethLogo from '../assets/eth.png'
import tehPociLogo from '../assets/green-tea.png'
import {TransactionContext} from '../context/TransactionContext'
import Link from 'next/link'

const style = {
    wrapper: `p-4 w-screen flex justify-between items-center`,
    logoContainer: `flex w-1/4 items-center cursor-pointer`,
    headerLogo: `flex w-1/4 items-center justify-start`,
    logoText: ` ml-[0.8rem] text-white font-semibold text-2xl`,
    nav: `flex-1 flex justify-center items-center`,
    navItemsContainer: `flex bg-[#191B1F] rounded-3xl`,
    navItem: `px-4 py-2 m-1 flex items-center text-lg font-semibold text-[0.9rem] cursor-pointer rounded-3xl`,
    activeNavItem: `bg-[#84C69B]`,
    buttonsContainer: `flex w-1/4 justify-end items-center`,
    button: `flex items-center bg-[#191B1F] rounded-2xl mx-2 text-[0.9rem] font-semibold cursor-pointer`,
    buttonPadding: `p-2`,
    buttonTextContainer: `h-8 flex items-center`,
    buttonIconContainer: `flex items-center justify-center w-8 h-8`,
    buttonAccent: `bg-[#172A42] border border-[#163256] hover:border-[#234169] h-full rounded-2xl flex items-center justify-center text-[#4F90EA]`,
}

const Headers = () => {
    const [selectedNav, setSelectedNav] = useState('transfer')
    const {connectWallet, currentAccount} = useContext(TransactionContext)
    const [userName, setUserName] = useState()
    
    useEffect(() => {
        if(!currentAccount) return
        setUserName(`${currentAccount.slice(0,5)} ... ${currentAccount.slice(40)}`)
    }, [currentAccount])

    console.log(connectWallet,currentAccount )

    return (
        <div className={style.wrapper}>
            <div className={style.logoContainer}>
                <Image src={tehPociLogo} alt="tehpoci" height={40} width={40} />
                <div className={style.logoText}>TehPoci</div>
            </div>
            <div className={style.nav}>
                <div className={style.navItemsContainer}>
                    <div onClick={() => setSelectedNav('transfer')}
                        className={`${style.navItem} ${selectedNav === 'transfer' && style.activeNavItem}`}>
                        Transfer
                    </div>
                    <div onClick={() => setSelectedNav('swap')}
                        className={`${style.navItem} ${selectedNav === 'swap' && style.activeNavItem}`}>
                        Swap
                    </div>
                    <div onClick={() => setSelectedNav('pool')}
                        className={`${style.navItem} ${selectedNav === 'pool' && style.activeNavItem}`}>
                        Pool
                    </div>
                    <Link href="/nft">
                    <div onClick={() => setSelectedNav('nft')}
                        className={`${style.navItem} ${selectedNav === 'nft' && style.activeNavItem}`}>
                        NFT
                    </div>
                    </Link>
                    <a href="https://info.uniswap.org/#/"
                        target="_blank"
                        rel="noreferrer">
                        <div className={style.navItem}>
                            Chart <FiArrowUpRight /> 
                        </div>
                    </a>
                </div>
            </div>
            <div className={style.buttonsContainer}>
                <div className={`${style.button} ${style.buttonPadding}`}>
                    <div className={style.buttonIconContainer}>
                        <Image src={ethLogo} alt="eth logo" height={20} width={20} />
                    </div>
                    <p>Ethereum</p>
                    <div className={style.buttonIconContainer}>
                        <AiOutlineDown />
                    </div>
                </div>

                {currentAccount ? 
                    (
                    <div className={`${style.button} ${style.buttonPadding}`}>
                        <div className={`${style.buttonTextContainer}`}>
                            {userName}
                        </div>
                    </div>
                    )
                : (
                    <div onClick={() => connectWallet()} className={`${style.button} ${style.buttonPadding}`}>
                        <div className={`${style.buttonAccent} ${style.buttonPadding}`}>
                            Connect
                        </div>
                    </div>
                )}
                

                <div className={`${style.button} ${style.buttonPadding}`}>
                    <div className={`${style.buttonIconContainer} mx-2`}>
                        <HiOutlineDotsVertical />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Headers