import React from 'react';
import { MdOutlineLogin } from 'react-icons/all';

/**
 * api model data
 * backend resources
 */

export const naira = '&#8358;';

export const headerLinksLeft = [
  {
    name: 'Dashboard',
    to: '/dashboard'
  },
  {
    name: 'Settlement',
    to: '/settlement'
  },
  {
    name: 'Contact Center',
    to: '/contact'
  },
  {
    name: 'Control',
    to: '/control'
  }
];
export const settlementMethods = [
  'select',
  {
    name: 'Card',
    id: 1,
    desc: ''
  },
  {
    name: 'Bank Transfer',
    id: 2,
    desc: ''
  },
  {
    name: 'Bank Account',
    id: 3,
    desc: ''
  }
];
export const settlementInfoBarData = (formData, setCard, okFilter) => [
  {
    title: 'All Settlements',
    val: formData?.totalTransaction?.toLocaleString() || '0',
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="27.8918" cy="28" rx="27.7707" ry="28" fill="#FCF3F4" />
        <path fillRule="evenodd" clipRule="evenodd" d="M30.654 19C30.8172 19 30.9667 19.0832 31.0483 19.2226L41.0613 36.325C41.0994 36.392 41.1211 36.4698 41.1211 36.5475C41.1211 36.7942 40.9172 36.9953 40.6671 36.9953H32.4022C32.2391 36.998 32.0896 36.9122 32.008 36.7728L24.7164 24.3147C24.6756 24.2477 24.6185 24.1913 24.5505 24.1511C24.333 24.0278 24.0557 24.1002 23.9307 24.3147L18.2594 34.0028C18.2214 34.0698 18.1996 34.1476 18.1996 34.2254C18.1996 34.4721 18.4035 34.6732 18.6536 34.6732C18.6536 34.6732 26.7396 34.683 26.917 34.6844C26.9199 34.6844 26.9228 34.6847 26.9258 34.6851L27.3472 34.6853C27.5101 34.6854 27.6577 34.7718 27.7393 34.9115L28.5404 36.3272C28.6656 36.5413 28.5914 36.8164 28.3754 36.9399C28.3073 36.9788 28.2283 36.999 28.1505 37L21.5697 36.998H14.5755C14.4967 36.998 14.4179 36.9766 14.3499 36.939C14.1324 36.8157 14.0563 36.5422 14.1813 36.3276L23.9307 19.6704C23.9715 19.6033 24.0285 19.547 24.0965 19.5068C24.314 19.3835 24.5913 19.4559 24.7164 19.6704L33.3728 34.4533C33.4516 34.59 33.6012 34.6759 33.7642 34.6759H36.5917C36.6706 34.6759 36.7494 34.6571 36.8174 34.6169C37.0349 34.4935 37.111 34.22 36.9859 34.0055L28.6585 19.6704C28.6204 19.6033 28.5987 19.5256 28.5987 19.4478C28.5987 19.2011 28.8026 19 29.0527 19H30.654Z" fill="url(#paint0_linear_1152_2778)" />
        <defs>
          <linearGradient id="paint0_linear_1152_2778" x1="14.1211" y1="37" x2="41.1211" y2="37" gradientUnits="userSpaceOnUse">
            <stop stopColor="#CF0923" />
            <stop offset="1" stopColor="#43063C" />
          </linearGradient>
        </defs>
      </svg>

    ),
    class: 'text-theme-black',
    click: () => {
      setCard('all');
      okFilter({ channelType: 0 });
    }
  },
  {
    title: 'Card Payments',
    val: formData?.totalCardTransaction?.toLocaleString() || '0',
    icon: (
      <svg width="57" height="56" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28.879" cy="28" r="28" fill="#FCF3F4" />
        <path d="M38.879 26V36C38.879 36.2652 38.7737 36.5196 38.5861 36.7071C38.3986 36.8946 38.1442 37 37.879 37H19.879C19.6138 37 19.3595 36.8946 19.1719 36.7071C18.9844 36.5196 18.879 36.2652 18.879 36V26H38.879ZM38.879 24H18.879V20C18.879 19.7348 18.9844 19.4804 19.1719 19.2929C19.3595 19.1054 19.6138 19 19.879 19H37.879C38.1442 19 38.3986 19.1054 38.5861 19.2929C38.7737 19.4804 38.879 19.7348 38.879 20V24ZM31.879 32V34H35.879V32H31.879Z" fill="#BF0926" />
      </svg>

    ),
    class: 'text-theme-black',
    click: () => {
      setCard('card');
      okFilter({ channelType: 1 });
    }
  },
  {
    title: 'Bank Transfer',
    val: formData?.totalBankTransferTransaction?.toLocaleString() || '0',
    icon: (
      <svg width="57" height="56" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28.09" cy="28" r="28" fill="#FCF3F4" />
        <path d="M36.8185 18H32.6095V30.5781H32.4337L23.8009 18H20.09V38H24.3185V25.4121H24.465L33.1661 38H36.8185V18Z" fill="#BF0926" />
        <path d="M16.09 31H40.09V28.9097H16.09V31ZM16.09 27.0903H40.09V25H16.09V27.0903Z" fill="#BF0926" />
      </svg>

    ),
    class: 'text-theme-black',
    click: () => {
      setCard('transfer');
      okFilter({ channelType: 2 });
    }
  },
  {
    title: 'Bank Account',
    val: formData?.totalBankAccountTransaction?.toLocaleString() || '0',
    icon: (
      <svg width="57" height="56" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="28.5104" cy="28" rx="27.7707" ry="28" fill="#FCF3F4" />
        <path d="M18.5925 36H38.4287V38H18.5925V36ZM20.5762 28H22.5598V35H20.5762V28ZM25.5352 28H27.5188V35H25.5352V28ZM29.5024 28H31.4861V35H29.5024V28ZM34.4615 28H36.4451V35H34.4615V28ZM18.5925 23L28.5106 18L38.4287 23V27H18.5925V23ZM28.5106 24C28.7737 24 29.026 23.8946 29.212 23.7071C29.398 23.5196 29.5024 23.2652 29.5024 23C29.5024 22.7348 29.398 22.4804 29.212 22.2929C29.026 22.1054 28.7737 22 28.5106 22C28.2476 22 27.9953 22.1054 27.8093 22.2929C27.6233 22.4804 27.5188 22.7348 27.5188 23C27.5188 23.2652 27.6233 23.5196 27.8093 23.7071C27.9953 23.8946 28.2476 24 28.5106 24Z" fill="#BF0926" />
        <path d="M18.5925 36H38.4287V38H18.5925V36ZM20.5762 28H22.5598V35H20.5762V28ZM25.5352 28H27.5188V35H25.5352V28ZM29.5024 28H31.4861V35H29.5024V28ZM34.4615 28H36.4451V35H34.4615V28ZM18.5925 23L28.5106 18L38.4287 23V27H18.5925V23ZM28.5106 24C28.7737 24 29.026 23.8946 29.212 23.7071C29.398 23.5196 29.5024 23.2652 29.5024 23C29.5024 22.7348 29.398 22.4804 29.212 22.2929C29.026 22.1054 28.7737 22 28.5106 22C28.2476 22 27.9953 22.1054 27.8093 22.2929C27.6233 22.4804 27.5188 22.7348 27.5188 23C27.5188 23.2652 27.6233 23.5196 27.8093 23.7071C27.9953 23.8946 28.2476 24 28.5106 24Z" fill="#BF0926" />
      </svg>

    ),
    class: 'text-theme-black',
    click: () => {
      setCard('account');
      okFilter({ channelType: 3 });
    }
  }
];
export const transactionInfoBarData = (
  {
    formData, setTransactionStatus, settleTransaction, okFilter, show
  }
) => [
  {
    title: 'All Transactions',
    val: formData?.data?.totalTransaction?.toLocaleString() || '0',
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="27.8918" cy="28" rx="27.7707" ry="28" fill="#FCF3F4" />
        <path fillRule="evenodd" clipRule="evenodd" d="M30.654 19C30.8172 19 30.9667 19.0832 31.0483 19.2226L41.0613 36.325C41.0994 36.392 41.1211 36.4698 41.1211 36.5475C41.1211 36.7942 40.9172 36.9953 40.6671 36.9953H32.4022C32.2391 36.998 32.0896 36.9122 32.008 36.7728L24.7164 24.3147C24.6756 24.2477 24.6185 24.1913 24.5505 24.1511C24.333 24.0278 24.0557 24.1002 23.9307 24.3147L18.2594 34.0028C18.2214 34.0698 18.1996 34.1476 18.1996 34.2254C18.1996 34.4721 18.4035 34.6732 18.6536 34.6732C18.6536 34.6732 26.7396 34.683 26.917 34.6844C26.9199 34.6844 26.9228 34.6847 26.9258 34.6851L27.3472 34.6853C27.5101 34.6854 27.6577 34.7718 27.7393 34.9115L28.5404 36.3272C28.6656 36.5413 28.5914 36.8164 28.3754 36.9399C28.3073 36.9788 28.2283 36.999 28.1505 37L21.5697 36.998H14.5755C14.4967 36.998 14.4179 36.9766 14.3499 36.939C14.1324 36.8157 14.0563 36.5422 14.1813 36.3276L23.9307 19.6704C23.9715 19.6033 24.0285 19.547 24.0965 19.5068C24.314 19.3835 24.5913 19.4559 24.7164 19.6704L33.3728 34.4533C33.4516 34.59 33.6012 34.6759 33.7642 34.6759H36.5917C36.6706 34.6759 36.7494 34.6571 36.8174 34.6169C37.0349 34.4935 37.111 34.22 36.9859 34.0055L28.6585 19.6704C28.6204 19.6033 28.5987 19.5256 28.5987 19.4478C28.5987 19.2011 28.8026 19 29.0527 19H30.654Z" fill="url(#paint0_linear_1152_2778)" />
        <defs>
          <linearGradient id="paint0_linear_1152_2778" x1="14.1211" y1="37" x2="41.1211" y2="37" gradientUnits="userSpaceOnUse">
            <stop stopColor="#CF0923" />
            <stop offset="1" stopColor="#43063C" />
          </linearGradient>
        </defs>
      </svg>

    ),
    class: 'text-theme-black',
    click: () => {
      setTransactionStatus('all');
      okFilter({ transStatus: 2 });
    }
  },
  {
    title: 'Total Unsettled Transactions',
    val: formData?.data?.totalUnsettledTrans?.toLocaleString() || '0',
    icon: (
      <svg width="57" height="56" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28.879" cy="28" r="28" fill="#FCF3F4" />
        <path d="M38.879 26V36C38.879 36.2652 38.7737 36.5196 38.5861 36.7071C38.3986 36.8946 38.1442 37 37.879 37H19.879C19.6138 37 19.3595 36.8946 19.1719 36.7071C18.9844 36.5196 18.879 36.2652 18.879 36V26H38.879ZM38.879 24H18.879V20C18.879 19.7348 18.9844 19.4804 19.1719 19.2929C19.3595 19.1054 19.6138 19 19.879 19H37.879C38.1442 19 38.3986 19.1054 38.5861 19.2929C38.7737 19.4804 38.879 19.7348 38.879 20V24ZM31.879 32V34H35.879V32H31.879Z" fill="#BF0926" />
      </svg>

    ),
    class: 'text-theme-black',
    click: () => {
      setTransactionStatus('unsettled');
      okFilter({ transStatus: '0' });
    }
  },
  {
    title: 'All Settled Transactions',
    val: formData?.data?.totalSettledTrans?.toLocaleString() || '0',
    icon: (
      <svg width="57" height="56" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28.09" cy="28" r="28" fill="#FCF3F4" />
        <path d="M36.8185 18H32.6095V30.5781H32.4337L23.8009 18H20.09V38H24.3185V25.4121H24.465L33.1661 38H36.8185V18Z" fill="#BF0926" />
        <path d="M16.09 31H40.09V28.9097H16.09V31ZM16.09 27.0903H40.09V25H16.09V27.0903Z" fill="#BF0926" />
      </svg>

    ),
    class: 'text-theme-black',
    click: () => {
      setTransactionStatus('settled');
      okFilter({ transStatus: 1 });
    }
  },
  (
    <div className={show ? 'd-flex justify-content-center' : 'd-none'}>
      <button type="button" className="btn center-vertical" onClick={settleTransaction}>Settle Transactions</button>
    </div>
  )
];

export const controlInfoBarData = (formData, setCard, okFilter) => [
  {
    title: 'All Merchants',
    val: formData?.totalMerchants?.toLocaleString() || '0',
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28" cy="28" r="28" fill="#FCF3F4" />
        <path d="M20.2109 38C20.2109 35.8783 21.0538 33.8434 22.5541 32.3431C24.0544 30.8429 26.0892 30 28.2109 30C30.3327 30 32.3675 30.8429 33.8678 32.3431C35.3681 33.8434 36.2109 35.8783 36.2109 38H20.2109ZM28.2109 29C24.8959 29 22.2109 26.315 22.2109 23C22.2109 19.685 24.8959 17 28.2109 17C31.5259 17 34.2109 19.685 34.2109 23C34.2109 26.315 31.5259 29 28.2109 29Z" fill="#BF0926" />
      </svg>
    ),
    class: 'text-theme-black',
    click: () => {
      setCard('all');
      okFilter({ channelType: 0 });
    }
  },
  {
    title: 'Businesses',
    val: formData?.businesses?.toLocaleString() || '0',
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28" cy="28" r="28" fill="#FCF3F4" />
        <path d="M23 21V18C23 17.7348 23.1054 17.4804 23.2929 17.2929C23.4804 17.1054 23.7348 17 24 17H32C32.2652 17 32.5196 17.1054 32.7071 17.2929C32.8946 17.4804 33 17.7348 33 18V21H37C37.2652 21 37.5196 21.1054 37.7071 21.2929C37.8946 21.4804 38 21.7348 38 22V36C38 36.2652 37.8946 36.5196 37.7071 36.7071C37.5196 36.8946 37.2652 37 37 37H19C18.7348 37 18.4804 36.8946 18.2929 36.7071C18.1054 36.5196 18 36.2652 18 36V22C18 21.7348 18.1054 21.4804 18.2929 21.2929C18.4804 21.1054 18.7348 21 19 21H23ZM20 31V35H36V31H20ZM27 27V29H29V27H27ZM25 19V21H31V19H25Z" fill="#BF0926" />
      </svg>

    ),
    class: 'text-theme-black',
    click: () => {
      setCard('card');
      okFilter({ channelType: 1 });
    }
  },
  {
    title: 'Edited Businesses',
    val: formData?.editedBusinesses?.toLocaleString() || '0',
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28" cy="28" r="28" fill="#FCF3F4" />
        <path d="M23 21V18C23 17.7348 23.1054 17.4804 23.2929 17.2929C23.4804 17.1054 23.7348 17 24 17H32C32.2652 17 32.5196 17.1054 32.7071 17.2929C32.8946 17.4804 33 17.7348 33 18V21H37C37.2652 21 37.5196 21.1054 37.7071 21.2929C37.8946 21.4804 38 21.7348 38 22V36C38 36.2652 37.8946 36.5196 37.7071 36.7071C37.5196 36.8946 37.2652 37 37 37H19C18.7348 37 18.4804 36.8946 18.2929 36.7071C18.1054 36.5196 18 36.2652 18 36V22C18 21.7348 18.1054 21.4804 18.2929 21.2929C18.4804 21.1054 18.7348 21 19 21H23ZM20 31V35H36V31H20ZM27 27V29H29V27H27ZM25 19V21H31V19H25Z" fill="#BF0926" />
      </svg>

    ),
    class: 'text-theme-black',
    click: () => {
      setCard('transfer');
      okFilter({ channelType: 2 });
    }
  }
];
