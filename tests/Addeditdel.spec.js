import { test, expect, firefox } from '@playwright/test'
import { Addeditdel } from '../POM/Addeditdel'  
import { Data1, Data2,Data3 } from '../Data/AddData'
import { Edit1, Edit2, Edit3 } from '../Data/EditData'
  
test.only('Menambah data', async({page}) => {
  const tamditpus = new Addeditdel(page)
  await page.goto('https://demoqa.com/webtables', {timeout: 60000, waitUntil: 'domcontentloaded'})
  await tamditpus.Tambah(Data1)
  await tamditpus.Tambah(Data2)
  await tamditpus.Tambah(Data3)
  await tamditpus.Edit(4, {firstname: 'Arya', email: 'aryaramadhan@gmail.com'})
  await tamditpus.Edit(5, Edit2)
  await tamditpus.Edit(6, Edit3)
  await tamditpus.Hapus()
  await page.pause()
  }
)
