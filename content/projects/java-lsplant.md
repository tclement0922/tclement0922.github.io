---
title: "jLSPlant [ARCHIVED - UNMAINTAINED]"
date: 2022-03-13T12:22:56+01:00
draft: false
---

#### [GitHub repo](https://github.com/tclement0922/jLSPlant)

> ## UNMAINTAINED
> ### This project is currently not maintained because it contains too many bugs and I don't have enough knowledge about ART and C++ to fix them. I archive it accordingly, but I could always start working on it again later.

An unofficial Java implementation of the LSPlant hooking framework.

The aim of this library is providing a easier way to use the LSPlant framework, without the need to provide an ART symbol resolver and a inline hook framework. It supports Android versions from 5.0 to 13.

### Warning

Compatibility isn't guaranteed for every device. Some OEM system modifications, abis or something else can break LSPlant, so if you plan to publish an app using this framework, do not forget to support the case where ```LSPlant.isInitialized()``` returns false. This library may also not work if LSPosed is enabled for the app that use it.

### Credits
 - [LSPlant](https://github.com/LSPosed/LSPlant) used as core framework
 - [Dobby](https://github.com/jmpews/Dobby) used as inline hook framework
 - Some files are based on [Pine](https://github.com/canyie/pine)

For more informations and licenses notices, click [there](https://github.com/tclement0922/jLSPlant).
