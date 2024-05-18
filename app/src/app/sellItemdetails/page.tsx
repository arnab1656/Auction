"use client";

// class="flex flex-row justify-center w-full pt-[75px] px-14 md:pt-5 md:px-5"
import React, { useState } from "react";
// import { Helmet } from "react-helmet";
import {
  Slider,
  Img,
  Button,
  Text,
  CheckBox,
  TextArea,
  Input,
  PageHeader,
  PageCard,
  PageFooter,
  Popup,
} from "ui";
// import CartSection from "../../components/CartSection";
// import DetailReviewSectionfooter from "../../components/DetailReviewSectionfooter";
// import Header from "../../components/Header";
// import HomepageCardproduct from "../../components/HomepageCardproduct";

import AliceCarousel, { EventObject, DotsItem } from "react-alice-carousel";
import FilterComp from "./filterComp";

import { clientFunc } from "./clientFunction";

export default function sellItemDetailPage() {
  // const [sliderState, setSliderState] = React.useState(0);
  // const sliderRef = React.useRef<AliceCarousel>(null);
  // const [sliderState1, setSliderState1] = React.useState(0);
  // const sliderRef1 = React.useRef<AliceCarousel>(null);

  const [isOpen, setIsOpen] = useState(false);

  const { data, mutate, isSuccess } = clientFunc();

  async function OnClickHandler() {
    mutate({
      description: "desctiop",
      endDate: new Date(),
      startDate: new Date(),
      title: "title",
      sellItemId: 7,
    });
  }

  // const handleOpenPopup = () => {
  //   setIsPopupOpen(true);
  // };

  // const handleClosePopup = () => {
  //   setIsPopupOpen(false);
  // };

  return (
    <div className="flex flex-col items-center justify-start w-full bg-gray-50">
      <PageHeader className="w-full"></PageHeader>
      <div className="flex flex-row justify-start w-full gap-[47px] max-w-[1290px]">
        <Img
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQADBgIBB//EADoQAAIBAwMCAwYDBwQCAwAAAAECAwAEEQUSIRMxIkFRBhQyYXGBI6GxQlKRwdHh8BUzYnIkQwc0gv/EABkBAAMBAQEAAAAAAAAAAAAAAAIDBAEABf/EACgRAAICAgIABgAHAAAAAAAAAAABAhEDIRIxBBMiMkFRFCMzQmFxof/aAAwDAQACEQMRAD8A+NcdYBcIwzyf0qyJpJZNsahWIIJ9KYQ20RZXikTjglos5PyzV00OEjEh6fi8JUeL6GkOaATEZhkLAsDxxz51ubEo3s4d+MlOPrms61qzT43ADvu8qNt7orZi3Hi2McUM3yQ2Dol2V2Rr5gc0lvU6zAx5L9qbSBmbxDk8jFDwwtNMyxgLJnCk9s1qdI6Qm93kXIOVz+dH29gOh1jh1xt25xg00vNGnhhVpZAGU8qTnJ9B61ZqOnviCOyhaUsuSijOT8xWPMm0kLsQWVn71HIhTaQc9U9lA70Za6dc7mkjlRoYyN7EYA+VONLjCnZ7tsJGHUgk/wBKKk0m1gVp7rrKoP4R3Btp78gdxQSz02jGxfBp775DJ03XYG3RP8P96quTGkoUEQEL4S65LU8sZPBGZLUM7ZYO7YP2A7fSvNQigv7tveIEVEAPVI5X5UtZd7Msz66fCIOo79R5c7Y/3T61Tc2UkQjdE344YZ5zTuezX3gtGo2gjaFPGKK6StGxuIviIxx2+dcs9M2zMy2jsBtUZYfCtVR6eVZ/wy+3HfyrQOiPKIIoyGGTuPcg+VUTxtGenAHxnDUxZjrEkkZYbYg7sM+DyNCtbzKQCGyO4xTsIUdVOc58uDVyu8LGSVclx4iRzR+cdYn2iElOmXAPDZxUpyYogco0Y3cnIOalD5p3IvAa4RV93UyA8D9aquY33L00UkcY9BVkN6z7UVZIwqfER5+ddRlOoGllLEfnSbaYK0eS6K06wpuI4ZmK/kKWe7PZSvCTwfEADyBWjmv+htEnBC4Cg5pLfTCW6hIAz0zuI+tFjnJumFBuynq+JRn5VfbKi3cPxDJ5xS2R9rjvjPeiYrhfeEGTleadJaHPZpbydZumCwLoSvI7jNWJBD1CzSOkiDKmMeflz6UNaTR3ccczRqZIyd4bsT6/wq5pQxcoxUAg8DFedJcXonaoviDS3EcFqql5CVJPIJPy86d/6Xpqwm2mupBKOAzEYb7Dj7cUitnEF3HdQSFpY344/WndjHf3Ny6C1tkeZQ5EoI2j13dsfWmY+LTsbjipCybTL1J2tjCR4sl0GUK+RBrgWd1GJvwkkjOAr4zt+tfRNJWSXS7r3SaO3trYeKaVVJkfH0Ix6efI4rK6lZyTyxCa7mnuoWDtF1JW2jnk/Dgnt2+WKVSgrl0UR8PGWhOLForV/wAEyE9zHhl+hA5pjpWkQRsh1Eb5MZ6LnhB8+f1rTezLTXVxPaR3wXw/hZdiVf8AcLFcH6E/alup2104uWt4bePU1BEsTeLcAeSnoflimY4U030Z5MY3Qj1mzs7dGu7aASo6tGVQ9iOxFJoWxKptyGz3RhyK81u81K1mjszlFUBlZD33Dv8AyqpIZltOrLLHlufxDg/I0WWKvRLJb0eX7xqod1RZByCvn9aVT3LOQuOPPA8qJaNdpzLt29ww7n1otZrG3i6NxGHd/wBpBwMfOtjoyhVnKqGaQYGMbDUo+SA3LdS1nmWPGMMe1eUy0FQLa3JQkzOSCOQBXokW4bEfIxyMYNB3Ub2gj5G8qN45JFH6cImiKkMHccHHH8a2SSVglLEPNsbIx2cmhrhQkoJyvrnypzFadSSM3CRgBMAL548zVcukTXEsMNspd5U3kk+FVz3PoKyM4phxg0+jPOHeTZjKg5GKughdpVY4Csdu4VstO9mNMiRLjUZWkdlMioDtHTHd2PkPT14ptbmyt7dLqS2FtaO2LW0iQda49CzHmul4mP7SpYJfIit0jilEcMiiGJQCcfH6mpPLFJxCNwznePStdKkNnbi51WCAzSE9O1jAVYx6s2MnH+CvY9MtPdutdWkUKyH8OFUJeU+g5JH+dqibXYH4R/DMrHIxVk8ILEKobg/9q3Qi9zt/dULXBi6XUEucTO7cD/qBk4pemk2E1zGzQFCjqQyNhSwPZe5I8ic4pjctEmr6nfXU4W3jv4EKscAbVPP8WFNw4+SbOjDyXsg1pNNtHtRb6ikHUmJC9IxlsnLFjlieQe470qv9VmvdXllmBuICqyIVbC7SPDjHy9eRRohktJJWuJBK6AY252TgfCWXtnmlmlWtusBMsf7RBxnHJzwM8Cl+IyXDjL4LMMKfJfIbo2sG0trpJVmMcsoVRG4Mm9QSSM+QBHJ9KMnubaQie4F4XkMAeedVSXqPwr4XsRlAfVTzS2OGOy1KOaGMKkqlCxXJUHzHoeO9Nls0JWO7YZnmjWPdku79RW38+QC0/BLnFQQrLHg+ZkvbDT2iu4byw2tHcqS6MvCuO/es/FBdXc+14yxBAUk4C/IVt9YtZX9nrBZJGluBLMC3ADHeefpSO0UyPtedUkztIYeYoMj8uXEhkk3YqltJ5EWGRT1xnbnuRQ1/bCBC8oyVOWweBT+5i2yN1GaQqMBlPagLmJeiF77hnB8/OshJ2dRnjcPKd0bsE8sCpTCeKFX8AUAjOA2KlPs2jmKK3UyS3SZj+EDdxn61IYw8BFu5Kg8RkEmiIEjnUFGTBy20nscelUxXVxtd+j+GRs3Lxiu5aA0w/ToJrucI6hFC5lZhjpqO5NNZmFvpNv0V2HUZEjXPdIfIZ+g5+ZNVbmtvZ2RVIMkkMjMe+ey9/qT+VE6jEp1PS7bgJBFnafXacfpUsncj0sUOMb+QTL6g8kZfi5veiQP2IYhnH5fnTOyuI7nVLnV5v/qWUQjgJHA4yxx68gUghmls9Q1G32nCv1Ad3kw5xQi6hs9krm2VSHXKyc9/Fzn6ijlBy0utf6HddmktZ21DWP8AULvHRt4AzDHhVjlgMfIYNGz3k4jN9OT1Zvw4UJ+GPPYehYkAn0oLRQt10LWIEx3aGS4bPkAox+gpve25fUtOhAGxWLYP7qj+uKmm1yoYugn3Rmt4zKxDmRScccjB/gB5epNAe0sj9RoWhPRuXDdXGVikQ+Et8jn8qaxTgwW7FQ2Nz4z3Of71xeWUFzZzT6gRJbxfDHjjAGeB6/5zTfCZXGbTFeIhyjYBYi4lt5BaRRtGrqvTR+AxBztz6+nbvQF01zpLRPd2Dm0kUbbgEhVb91h+z5j0OKMujDpWn9aQKiyFVFux4H1znnn7Vnr72okvNOMGle6QuWIZZW8gfJf51e8MZPkyWOSSXFGltP8AUNRhN2LFoYeBAW56g8yf3QPsTVuon3MQzMkXvkbhgolG6ZyCVXPbauc4Hp9aztr7WOVhhvI7UzgESOp3KB5EDPH05rWNdRILTqKjyS4k6pGQ6k44+nn6fnTIQjj2gJylLTFeu3cphhiDKjW642n1IBP5k1lbiLqb51ciYkZ29l/vWu9sLONdRTpbVJiHDHhsfP1rJytF03DrypOeMfeo5S5SbES9Lo9a4uc72KlexyMZpZqF20jpsIVeQBmjZYmMQYgZ8gaClVJg/Iwoz271sas5SZQkYAxNIFYdgT5VK8eKJMCWUbsZ9alM4nchjZW346gn4lIG38qK2FU6ExAZTluPOhLcNOUkRNxAwQB6VfAS0kgnzg4AB7CkyZ10MTse3RVXbEYFi79+xP05xTJ4Gm9sogBlVtfX5EZpRbBTbIJeAJP5itMsgh9q7ZyBsmttmceflSH9fwz1IO4pmf1iBrb2otRtHSmi2SZHfnillzpZV9TSPlXuUiAPmWUZrX+1tmhl018DeboKCR5Dmuk04y63bQbQqtctdPz3CqAKPHk0v6NkuyjSrY6PBMxXwwW23Pq2Mn9RTPptJqEIcYKWnf8A7Ef0pZqUrNpDnyvLzAz2Cl8D9KZiVl1cHI6Rt8fPIJ/rU04vthxZTYkBD1OyRcccdz/SmtnNGYZ5JGO3jYG7/D8VJVJUxQFhl4sMc/8AI/pzXEV0Zp3C5H/qIHlt+H8jmjxOpnZV6TMXNydSu7ywvG2dJumh9PNW++fzp3b6BocUCbYV3EbmPfcfqaT+1Onvb6nbXsa5WYiFx/yz4T9qd39rc2caH/djChWYeXzr1L0qPOZZL7L6ZdxRrZxBJt4beBjIHPl37Vfazi69pY9GYFlhKzKcf7ZGCf411oV8yRzLeJ0xGh/FZsLV3srbykXesTxhri7l2xKO5UcD9M0x9bAXZz7blJXVkyGjbCsR2bHI/OsTcJ1GD7uBzt8s1tfbKIQwWsbnMjOZHJ9axYiCl33rwRkMe1ec01JgZ/eU3Jd4+Pix/DFBM2QrBviGWXHb0oyRl6nhPPn8qHljiJbxcHy9KZF0LB2YsfEMn1xUr3LdtpI8iKlGcG283uki5BJzk7T5Gm3Vge3ZpfiBG31NZ0yiXY4YKfhIonxZ2OzqAceHypckzmPLLbdTQwqmA45/z7VfdXboLOeZi0llP0JTjnGeD9x+tD6C0UF40NyNsnAhc+eAeM/Mc/arZOlqEUr/ALM6iKb5MOVelqPVnpYH+WjQ+0cMV7c2mSAEheRP4qP0Jpgs6f6zqEEaHqpZCNGH7x8v0pBpsl1f6FEYk3XOnyGG4jJwSh4OD9MH7U/tbKG513UpDIUea2XpNu4OB3x8jTMWPezck6M5rUDNYe7xHHQvY48n5IpP55qxbiU2VnqC8sUG9R5Bv74qm0PvDavYHe25veI3zyGZSv6irtHmS3v7eKYBI7mwjKr38SEj+lFPCmBHLRxczdW36wPwxpjH/c5/Wi7Kx6epo78R3GV//Y5H5Zoe/ge3k2DCo8jYOPIkEfmK1ntBpU0uipNYA+9RMJox+9ik4sTcx2TJ6QPXNEN/p7xdmB3IQexHalHs/etdo1teqVnh8Mit5+Wa1OhanFqdhHIoCyYxIn7rUFe6bEupreJ4ZNjI20dwf74r0EqVELdio21rPeNbw2ZuLljgFh4F+pra6Vp8NhaQQnBZQSTjzJyaEtlisIOvLiLCbn8hn1zSa81i89oLo6booaOLPju2GFA88fPFMRgh9u7gXTrKFBhEpRDnhtvcj7/pWPeUq2wqQcHxdx/mK3//AMi6Qtlp2l21sNyqjZOBye5P86wN3bPIV3SpGFByWB5B7CoMkam7AntnLQwxLugOVAzk8n7UDcdVZMqd+B5dqKiyv4ikZBABA8qslslXTy8JLHq7WUtyvngfLOK2L+zONgQiuO6JkHn48flUq5zJBhHUO2Odyk4r2jszigFLZgrhsdgc54NFROznzDqcnHoKHtnhvIgtuzIVGNpOeKYxIiTggbVZc5z51mX09nNDCysrvUbcy2VxGemRvRu7DnGPTHNewSLaCSUEtDEejOMevb/P611pjaRYgyXO+G6ALRuXIVwfy4pp7NyWuuaXdw4yrTMGYjnvkGhkqx3Rbg+jmS8vdKWLVbJOtDLEBcxx/tgdnFDXWvLeRrf6NdBJYuZLd/IHuPvVcV5eezlyYLm1aazY53LyPqPT6VRfXegaskj6d/4t7sIYFdpKnvn1pmFaMzBGizTGe+uImUSPFJJgPwnhz+vNFG7iurK0v7OMPcWmYnUcgZ/vSC2eCxRLbTJCUVSZZD/7Ce/5V4r3GnTCa0Ektu5zKgIAJ/zzpikraEqRurZo9R0GyumO5wuST+8O/wCda3RtRgksI7YN+JCArKxyT8+awfs7MJdGKhcDrOAhHbnP86Z31vNIkVzZTNDOowWHII9GHnUWOfDNJfZZOPLEgvUdNksdU/1DSjsZ3HvEWfDIPXHrTW4nX3qMNySpIX1rJw+0k63UtnfRqs0YBBXOGrq8vNsy3MkhDbccHtVrZIkau9t4714/en328fiMWeHb5+o+VERXttACBHHCny4Ar5/qWsarqE1tY6PcdLJPVkKdgPr8+1XWvstJ7wJdSup7tWPiEjnkn9KLlR3Cwn2+1dLw20UPIi5Dj51j5pXupHZ0IKjB4788/etD7ShI9SkSKH/ajQKo7Lgd/sKTKoFukuBiXxDnJJ5z+f61DOfKVg8adC1FxG+VYqpyMcZ4plDbo8HTibe2cSI6gHkD5/0qtmVvw4VwM/GRwue35mqEyAzRMN+eVY8Nx2+WaxMyJdeWcDS/iy7GAwVdcnj51K9a4nc5jMYA4xN8Q+XfmpR7DpGZ0vTxb3SiO4EshwvgPGTxitNp9vI7iERI82SVRv2h9fOuktdL0TTIHeN5bu4wIUR9uw/zP1qrUra60SCC4sDJciKUktjsR5fqPtT8kHkkDx3Z3qWhWmoWa3UUs0YfxJC54jbzGK70SC50ssNPHVlt1JkQ8dTPcfbNLLXVtT1i8Z5EMNvE2QgXBJ9Keafp7XC3Uscskc0fKsD2JyTnPligzSpqA2L9SofaP7QaLOgN5NHA7ZzHJwVI9aW+0djoF48cymFlLhfw2wXz5cUJZ2t3dXSLLoVrLcAj/wAiRsIR64FMtX0W2trXrpZQJcOwz0hjBHmvzosdRi6CzW3sWm2hG23ijWOLuCvYA+VSCyktZW6mCjxkrwMbs8cfwriES3Bhtp2BzGOm/wDyPOD64o2SCZ7sgMGDPsEePhbgcfwqKcn2IUdjDSSP9OG3t12HAx5CmdjcJGgikyEzkHbxilOnwMkV5gAY2vjsQ2W70dp8jb8d07EEdqVF+o9CO8dFHtJb2y3cUqSDdNyvp9jVOkW/vt8Ip0xHtJTPf649K79poJIpbWO1ttyFWkRsHCN5j9D/ABpXHqN5p0B1TpSCZnVJGZSePM4+YxV05tTSI18n0vSvZ+yjlEqqWk/5EmitSjiiyx2naMnB5/hSH2f9pNSu+mkGh3WWz+JKuxfqc13r9zdxwSSXTRl27RxeX1J71TlaUTIp2YPWppLm+uduwB5ETqNnlCOe30NemFXiHKbHYbOeQM44FdTTWlxHzETMFGfFyw5Ix8+TQtx07dV6i/7iAsXXtkYHPGMfy9K8609IFtXZXdwXNvcM2VjjEgBJOBgHPbuck11bQSySTHiUbsqSuOMdjkfpVtxeqRCcHLruDtyD34+Q8vtVcczmHez/AIjpkgnwkg/ED5CiXRy+gZOnGPHBMC3OFbH5HtUr2R7jdmNmUHkgAd/PvXlFs2mBX9t7wkRWUsY3DgjnptRlv77Pb/iSgx7mYDZ5nz70PJLHbszZZnVfEGPBGPlRGk3TToFDDZyuT59+aZKU0tMXdBi2hjTdApBAwecg/wB/70S8p0mIyXEbi3kQR3EgOemxz5emMD71TZajbr0UZd0gOHx5kcc1qobaxurFYRIkiyoz3H1Pfj8qRi5SlbHY/szWhSamkaKhtY7VfhlyWLL5Y+1X6pd3uo2zzR+CziyIyB45XHYgeS98etVSXdlou3TQTHEv+0T4hj0zVfvl/fWb35t9lqjhYWGcufLI+1ULSloPL7UyW6senIIkEeFDFD34znvxweaY6TE7uJypBg3LtLYyc/z/AJUqB2W17DIuxthZAT3DDJwPsRR8FwkiSxMApePaz5wAwzjP1G3+FSSWhSCtMlY3V2MNtlXqKW5z88/OromZbhUjPic9vQetLLe8Y39nEm5UePHPYgjH6mmUAdSdm3ecLn0pSTTtluB3FoO9orfdpEMzOA/U+LPA8J8qE060SbULe2cCW3Jj5xjdtxt4o+7CX2n3Vq+7bBtJZe+e9LNOyl/a3EdwZELjwoMhefPzHpT8j9cWRyTTZ9OngHu/SiOwlcAisD7RzyrlJRvkj8J2/tc1u7+5FvbJJJ4Rwp+RPavmftRcFgwI5aQA5/jVninSpBQWmxVELW3kljJIbBKlgT4fLn15oKS7NyZFKvIkp8Q+Xpx5edGyRSSA7ti7kIIU4BA7H+NLYbUxo01ujdXYSpD4J47ioV2TtnBURQBRNtU5CK7AYBPbnz7muLtTDcNboCsaJ0kz2XPxfniu5blFiZ5trSiPwyAds89/uaAmu1e8zKwMJwWPq1Pgaj221G8RGFvMQm49s1KCv7M29wUtdxiwCMAGpTaTD5HUZLkRMSUCkAH5dqJt5pHSUO24rgqx7j717UrJCi62wxYsOdwOa22o6bbWFvNqForRXDGPcVPDBj4gR2INSpXYe2Mx9ASWVucxvGrqH8IcA7R3wK0HtGqwezMyRKqqApGBjFSpXQ90ijL7EYKOV5+gJCCGQqQABx6fSudPmYabJOP9xXGD9hUqUp9CUd6bPKJZ5N5yiggeXfP8hWoPge4deNgYgeXFSpSMnZV4fthekW6XGmSGbL9bezA+ua706zii1yyt03dJtjEE/I8fTgVKlMn3ATP3M0ntDM/+n3YzwqBh8jxXzv2omdELKcHqL/SvKlUeI95i/TYJftuhibAzJuLYHpnH6Chr67ljsI3jIQtFjw+WeK9qVOu0TsS3MYNlDHk4QuM+Z+tBRu2zZnwkZPz5qVKpj0auxpBzBGfVRXlSpSn2cf/Z"
          alt="image_one"
          className="w-[49%] object-cover"
        />
        <div className="flex flex-col items-center justify-start w-[49%] gap-[30px]">
          <div className="flex flex-col items-start justify-start w-full gap-8">
            <Text size="2xl" as="h1" className="tracking-[-0.50px]">
              Complete set of sofa, pillows and bed sheets
            </Text>
            <div className="flex flex-row justify-start items-center gap-[15px]">
              {/* <RatingBar
                      value={1}
                      isEditable={true}
                      color="#d9d9d9"
                      activeColor="#ff9432"
                      size={20}
                      className="flex justify-between w-[140px]"
                    /> */}
              <Text as="p" className="!text-gray-500 tracking-[-0.50px]">
                ( 1 review )
              </Text>
            </div>
            <Text
              size="3xl"
              as="h2"
              className="!text-blue_gray-900_01 tracking-[-0.50px]"
            >
              $ 75.00
            </Text>
            <div className="flex flex-col items-start justify-start w-full gap-[19px]">
              <Text size="md" as="h3" className="tracking-[-0.50px]">
                <span className="text-gray-500 font-normal">Stok :</span>
                <span className="text-black-900 font-normal">18</span>
              </Text>
              <Text size="md" as="h4" className="tracking-[-0.50px]">
                <span className="text-gray-500 font-normal">SKU :</span>
                <span className="text-black-900 font-normal">BA65</span>
                <span className="text-black-900"></span>
              </Text>
              <Text size="md" as="h5" className="tracking-[-0.50px]">
                <span className="text-gray-500 font-normal">Categories :</span>
                <span className="text-black-900 font-normal">
                  Chair, New Arrivals, Special
                </span>
              </Text>
              <Text size="md" as="h6" className="tracking-[-0.50px]">
                <span className="text-gray-500 font-normal">Tags :</span>
                <span className="text-black-900 font-normal">Black, Chair</span>
              </Text>
            </div>
            <Text
              size="lg"
              as="p"
              className="!text-gray-500 tracking-[-0.50px] !leading-[35px]"
            >
              In order to sit comfortably for long periods, people need freedom
              of movement. The Form rocking chair has a molded plastic shell
              with a wide, curved seat, which gives plenty of opportunity for
              changing one’s sitting position.
            </Text>
          </div>
          <div className="flex flex-row justify-start w-full">
            <div className="flex flex-row justify-between items-center w-[55%]">
              <div className="flex flex-row justify-start items-center gap-[15px] p-[9px] border-black-900 border border-solid">
                <Img
                  src="images/img_bx_minus_circle.svg"
                  alt="image_two"
                  className="h-6 w-6 ml-1"
                />
                <Text
                  size="lg"
                  as="p"
                  className="!text-black-900 tracking-[-0.50px]"
                >
                  1
                </Text>
                <Img
                  src="images/img_bx_plus_circle_1_blue_gray_900_01.svg"
                  alt="image_three"
                  className="h-6 w-6"
                />
              </div>
              <div>
                <Button
                  color="black_900"
                  size="4xl"
                  className="tracking-[-0.50px] min-w-[128px]"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  list for Auction
                </Button>

                {isOpen && (
                  <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                      <Text>Popup Title</Text>
                      <h2 className="text-xl font-bold mb-4">
                        Popup Title is here
                      </h2>
                      <Input
                        className="w-[295px]"
                        wrapClassName="flex flex-row p-3 w-[350px] justify-between border border-1  border-gray-200 items-center"
                        // ref={inputRef}
                        placeholder="Place your offer"
                        // onClick={handleClick}
                      ></Input>

                      <Button
                        className=" w-full mt-5 bg-purple-700 p-5"
                        onClick={() => {
                          OnClickHandler();
                        }}
                      >
                        Submit
                      </Button>

                      <button
                        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        onClick={() => setIsOpen(false)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <Button
                color="blue_gray_100"
                size="3xl"
                variant="outline"
                className="w-[43px]"
              >
                <Img src="images/img_frame_48095996.svg" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* <FilterComp></FilterComp> */}
      {/* <div className="flex flex-col font-manrope items-center justify-center md:px-10 sm:px-5 px-[120px]  py-[120px] w-full">
        <Text
          className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[-0.72px] w-auto"
          size="txtManropeExtraBold36"
        >
          Recommended auctions
        </Text>

        <div className="md:gap-5 grid sm:grid-cols-4 justify-center w-full">
          {landingPageCardPropList.map((props, index) => (
            <React.Fragment key={`LandingPageCard${index}`}>
              <PageCard
                className="flex flex-1 flex-col h-full items-start justify-start w-full"
                {...props}
              />
            </React.Fragment>
          ))}
        </div>
      </div> */}
      <PageFooter className="bg-white-A700 flex gap-2 items-center justify-center md:px-5 py-20 w-full" />
    </div>
  );
}
