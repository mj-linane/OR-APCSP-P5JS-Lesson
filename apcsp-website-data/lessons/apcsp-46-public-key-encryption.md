---
title: 'APCSP 46: Public Key Encryption'
date: '2020-01-29T09:34:19-05:00'
status: publish
permalink: /courses/ap-computer-science-principles/lessons/apcsp-46-public-key-encryption
author: 'MJ Linane'
excerpt: ''
type: sfwd-lessons
id: 27233
ld_lesson_category: []
ld_lesson_tag: []
course_template:
    - ''
wp_last_modified_info:
    - 'February 11, 2020 @ 10:11 am'
wplmi_shortcode:
    - '[lmt-post-modified-info]'
course_id:
    - '25132'
ld_course_25132:
    - '25132'
site-sidebar-layout:
    - default
site-content-layout:
    - default
theme-transparent-header-meta:
    - default
stick-header-meta:
    - default
---
Overview
--------

Purpose
-------

This is a fairly hefty lesson because the underlying ideas are subtly quite sophisticated. It’s worth noting that much of the material here – all but the highest level takeaways – are beyond the scope of what’s covered on the AP exam. You need to know the basic public key encryption process, and what asymmetric encryption is. For programming you need to know how the modulo operation works.

Our purpose here is to reveal some of the magic that happens every day on the Internet to enable secure transactions. To many the fact that encrypted messages can be sent between parties who have never met before is both taken for granted and opaque. Our belief is that understanding how it works with some depth – getting to experiment with the mathematical principles that make asymmetric keys possible, and the resulting encryption hard to crack – is deeply satisfying.

The widget in the lesson **mimics the RSA encryption algorithm** (with smaller numbers and slightly easier mathematics).

Vocab
-----

- **asymmetric encryption** – used in public key encryption, it is scheme in which the key to encrypt data is different from the key to decrypt.
- **modulo** – a mathematical operation that returns the remainder after integer division. Example: 7 MOD 4 = 3
- **Private Key** – In an asymmetric encryption scheme the decryption key is kept private and never shared, so only the intended recipient has the ability to decrypt a message that has been encrypted with a public key.
- **Public Key Encryption** – Used prevalently on the web, it allows for secure messages to be sent between parties without having to agree on, or share, a secret key. It uses an asymmetric encryption scheme in which the encryption key is made public, but the decryption key is kept private.

Resources
---------

- [Public Key Bean Counting Explained](https://docs.google.com/document/d/1l0KDF33-gWIssZGqfuHgD0QpF50Pdyqras46FeuNLgc/export?format=pdf) – Activity Guide (copy as[ ](https://docs.google.com/document/d/1l0KDF33-gWIssZGqfuHgD0QpF50Pdyqras46FeuNLgc/export?format=doc)[Google Doc](https://docs.google.com/document/d/1l0KDF33-gWIssZGqfuHgD0QpF50Pdyqras46FeuNLgc/copy))
- [Multiplication + Modulo](https://docs.google.com/document/d/1JRWUKPl_3Pd6UUDub6aQ3hhUbb5HPioqJl2K4ipbRe0/export?format=pdf) – Activity Guide (copy as [Google Doc](https://docs.google.com/document/d/1JRWUKPl_3Pd6UUDub6aQ3hhUbb5HPioqJl2K4ipbRe0/copy))
- [The Internet: Encryption &amp; Public Keys](https://www.youtube.com/watch?v=ZghMPWGXexs) – Video ([download](https://videos.code.org/2015/csp/concept_encryption.mp4))
- [Public Key Cryptography Explained](https://docs.google.com/document/d/1JpOnfsr4wZbEUXvpsN_b520NBt8Py6rSwp-uiDCa-VU/export?format=pdf)– Handout (copy as [Google Doc](https://docs.google.com/document/d/1JpOnfsr4wZbEUXvpsN_b520NBt8Py6rSwp-uiDCa-VU/copy))
- [How and Why Does the Public Key Crypto Really Work?](https://docs.google.com/document/d/1c7UGv3Bc0GD0C1EhgSsXzKvzPRj41DcYpUjH8nK0O2c/export?format=pdf) – Resource (Copy as [Google Doc](https://docs.google.com/document/d/1c7UGv3Bc0GD0C1EhgSsXzKvzPRj41DcYpUjH8nK0O2c/copy))
- [RSA Encryption Explained](https://www.comparitech.com/blog/information-security/rsa-encryption/) – Article Link
- [TLS, Digital Certificates, and Public Key Explained](https://www.khanacademy.org/computing/ap-computer-science-principles/the-internet/tls-secure-data-transport/a/transport-layer-security-tls) – Khan Academy Website
- [Mathematics of the RSA Public-Key Cryptosystem Explained](http://www.mathaware.org/mam/06/Kaliski.pdf) – PDF

Public Key Bean Counting (aka The “Cups &amp; Beans” Activity)
==============================================================

### Sending Secret Messages without agreeing a on a secret key ahead of time

<div class="wp-block-image"><figure class="aligncenter">![](https://images.code.org/305a9cc1e16efbfef70b57349f924775-image-1485710321896.png)</figure></div>In this activity, cups filled with beans will represent information going back and forth between Alice and Bob.

**The goal:** understand the mechanics of communication using public and private keys

**The Metaphor:** Beans inside the cup represent “encrypted information”

**Setup**

- Information will be represented as beans inside a cup
- Alice will create a “public cup” of beans
- Bob will add a secret number of beans
- Eve can see everything, even pass the cup, but can’t open it up — can she determine the secret message?

- - - - - -

### Main Takeaways and Terminology:

- Obviously on the Internet information is not exchanged as beans in cups.
- Our demonstration DOES NOT show or explain how the math or encryption works (we’ll get to that next)
- What it DOES show are the mechanics of public key communication: How public and private keys are used to encrypt information.
- Here are the terms you should know:

<div class="wp-block-image"><figure class="aligncenter">![](https://images.code.org/8ab1d4ed160eb395f65d711c5d6fd71e-image-1485710773739.png)</figure></div>Modulo Clock
------------

For this activity, we are going to the Code.org link

<https://studio.code.org/s/csp4-2019/stage/9/puzzle/4>

Public Key Crypto Widget
------------------------

 For this activity, we are going to the Code.org link

<https://studio.code.org/s/csp4-2019/stage/9/puzzle/6>

Public Key(RSA) Encryption Algorithm in Brief
---------------------------------------------

 The various observations just stated form the basis for the RSA public-key cryptosystem,  
 which was invented at MIT in 1977 by Ronald Rivest, Adi Shamir and Leonard  
 Adleman.

The public key in this cryptosystem consists of the value n, which is called the modulus,  
 and the value e, which is called the public exponent. The private key consists of the  
 modulus n and the value d, which is called the private exponent.  
 An RSA public-key / private-key pair can be generated by the following steps:

1. Generate a pair of large, random primes *p* and *q*.
2. Compute the modulus *n* as *n = pq*.
3. Select an odd public exponent *e* between *3* and *n-1* that is relatively prime to *p-1*  and *q-1*.
4. Compute the private exponent *d* from *e*, *p* and *q*. (See below.)
5. Output (*n*, *e*) as the public key and (*n*, *d*) as the private key.
6. The encryption operation in the RSA cryptosystem is exponentiation to the *e*th power modulo *n*:  
   *c = ENCRYPT (m) = m^e mod n*
7. The input m is the message; the output *c* is the resulting ciphertext. In practice, the  
   message *m* is typically some kind of appropriately formatted key to be shared. The actual  
   message is encrypted with the shared key using a traditional encryption algorithm. This  
   construction makes it possible to encrypt a message of any length with only one  
   exponentiation.
8. The decryption operation is exponentiation to the *d*th power modulo n:  
   *m = DECRYPT (c) = c^d mod n*

Public Key Example
------------------

2048 bit RSA Key

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">-----BEGIN RSA PRIVATE KEY-----
Proc-Type: 4,ENCRYPTED
DEK-Info: DES-EDE3-CBC,32495A90F3FF199D
lrMAsSjjkKiRxGdgR8p5kZJj0AFgdWYa3OT2snIXnN5+/p7j13PSkseUcrAFyokc
V9pgeDfitAhb9lpdjxjjuxRcuQjBfmNVLPF9MFyNOvhrprGNukUh/12oSKO9dFEt
s39F/2h6Ld5IQrGt3gZaBB1aGO+tw3ill1VBy2zGPIDeuSz6DS3GG/oQ2gLSSMP4
OVfQ32Oajo496iHRkdIh/7Hho7BNzMYr1GxrYTcE9/Znr6xgeSdNT37CCeCH8cmP
aEAUgSMTeIMVSpILwkKeNvBURic1EWaqXRgPRIWK0vNyOCs/+jNoFISnV4pu1ROF
92vayHDNSVw9wHcdSQ75XSE4Msawqv5U1iI7e2lD64uo1qhmJdrPcXDJQCiDbh+F
hQhF+wAoLRvMNwwhg+LttL8vXqMDQl3olsWSvWPs6b/MZpB0qwd1bklzA6P+PeAU
sfOvTqi9edIOfKqvXqTXEhBP8qC7ZtOKLGnryZb7W04SSVrNtuJUFRcLiqu+w/F/
MSxGSGalYpzIZ1B5HLQqISgWMXdbt39uMeeooeZjkuI3VIllFjtybecjPR9ZYQPt
FFEP1XqNXjLFmGh84TXtvGLWretWM1OZmN8UKKUeATqrr7zuh5AYGAIbXd8BvweL
Pigl9ei0hTculPqohvkoc5x1srPBvzHrirGlxOYjW3fc4kDgZpy+6ik5k5g7JWQD
lbXCRz3HGazgUPeiwUr06a52vhgT7QuNIUZqdHb4IfCYs2pQTLHzQjAqvVk1mm2D
kh4myIcTtf69BFcu/Wuptm3NaKd1nwk1squR6psvcTXOWII81pstnxNYkrokx4r2
7YVllNruOD+cMDNZbIG2CwT6V9ukIS8tl9EJp8eyb0a1uAEc22BNOjYHPF50beWF
ukf3uc0SA+G3zhmXCM5sMf5OxVjKr5jgcir7kySY5KbmG71omYhczgr4H0qgxYo9
Zyj2wMKrTHLfFOpd4OOEun9Gi3srqlKZep7Hj7gNyUwZu1qiBvElmBVmp0HJxT0N
mktuaVbaFgBsTS0/us1EqWvCA4REh1Ut/NoA9oG3JFt0lGDstTw1j+orDmIHOmSu
7FKYzr0uCz14AkLMSOixdPD1F0YyED1NMVnRVXw77HiAFGmb0CDi2KEg70pEKpn3
ksa8oe0MQi6oEwlMsAxVTXOB1wblTBuSBeaECzTzWE+/DHF+QQfQi8kAjjSdmmMJ
yN+shdBWHYRGYnxRkTatONhcDBIY7sZV7wolYHz/rf7dpYUZf37vdQnYV8FpO1um
Ya0GslyRJ5GqMBfDS1cQKne+FvVHxEE2YqEGBcOYhx/JI2soE8aA8W4XffN+DoEy
ZkinJ/+BOwJ/zUI9GZtwB4JXqbNEE+j7r7/fJO9KxfPp4MPK4YWu0H0EUWONpVwe
TWtbRhQUCOe4PVSC/Vv1pstvMD/D+E/0L4GQNHxr+xyFxuvILty5lvFTxoAVYpqD
u8gNhk3NWefTrlSkhY4N+tPP6o7E4t3y40nOA/d9qaqiid+lYcIDB0cJTpZvgeeQ
ijohxY3PHruU4vVZa37ITQnco9az6lsy18vbU0bOyK2fEZ2R9XVO8fH11jiV8oGH
-----END RSA PRIVATE KEY-----
```

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title="">-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAxzYuc22QSst/dS7geYYK
5l5kLxU0tayNdixkEQ17ix+CUcUbKIsnyftZxaCYT46rQtXgCaYRdJcbB3hmyrOa
vkhTpX79xJZnQmfuamMbZBqitvscxW9zRR9tBUL6vdi/0rpoUwPMEh8+Bw7CgYR0
FK0DhWYBNDfe9HKcyZEv3max8Cdq18htxjEsdYO0iwzhtKRXomBWTdhD5ykd/fAC
VTr4+KEY+IeLvubHVmLUhbE5NgWXxrRpGasDqzKhCTmsa2Ysf712rl57SlH0Wz/M
r3F7aM9YpErzeYLrl0GhQr9BVJxOvXcVd4kmY+XkiCcrkyS1cnghnllh+LCwQu1s
YwIDAQAB
-----END PUBLIC KEY-----
```

Putting It All Together With Digital Certificates, TLS, and Public Key
----------------------------------------------------------------------

<https://www.khanacademy.org/computing/ap-computer-science-principles/the-internet/tls-secure-data-transport/a/transport-layer-security-tls>

What are the vulnerabilities of public key encryption?
------------------------------------------------------

1. Spoofing
2. Man-in-the-Middle attacks

1. [French gov used fake Google certificate to read its workers’ traffic](https://www.theregister.co.uk/2013/12/10/french_gov_dodgy_ssl_cert_reprimand/) – Article
2. [Windows Server vulnerability disclosed by NSA; don’t wait to patch —](https://www.networkworld.com/article/3514709/windows-server-vulnerability-disclosed-by-nsa-dont-wait-to-patch.html)[ ](https://www.networkworld.com/article/3514709/windows-server-vulnerability-disclosed-by-nsa-dont-wait-to-patch.html)[1/19/2020](https://www.networkworld.com/article/3514709/windows-server-vulnerability-disclosed-by-nsa-dont-wait-to-patch.html) – Article

Homework
--------

Classroom – Modulo Math Explained