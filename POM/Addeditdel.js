import { test, expect } from '@playwright/test'

export class Addeditdel {
  constructor(page) {
    this.page = page
    this.addlink = page.getByRole('button', { name: 'Add' })
    this.editlink4 = page.locator('#edit-record-4').getByRole('img')
    this.editlink5 = page.locator('#edit-record-5').getByRole('img')
    this.editlink6 = page.locator('#edit-record-6').getByRole('img')
    this.delbtn4 = page.locator('#delete-record-4 path')
    this.delbtn5 = page.locator('#delete-record-5 path')
    this.delbtn6 = page.locator('#delete-record-6 path')
    this.firstname = page.getByRole('textbox', { name: 'First Name' })
    this.lastname = page.getByRole('textbox', { name: 'Last Name' })
    this.email = page.getByRole('textbox', { name: 'name@example.com' })
    this.age = page.getByRole('textbox', { name: 'Age' })
    this.salary = page.getByRole('textbox', { name: 'Salary' })
    this.department = page.getByRole('textbox', { name: 'Department' })
    this.submit = page.getByRole('button', { name: 'Submit' })
  }

  Tambah = async (data) => {
    //await this.page.goto('https://demoqa.com/webtables')
    await this.addlink.click()
    await this.firstname.fill(data.firstname)
    await this.lastname.fill(data.lastname)
    await this.email.fill(data.email)
    await this.age.fill(data.age)
    await this.salary.fill(data.salary)
    await this.department.fill(data.department)
    await expect(this.submit).toBeVisible()
    await this.submit.click()
    console.log(`Selesai menambah data: ${data.firstname} ${data.lastname}`)
  }

  Edit = async (rowNumber, data) => {
    const editButton = this.page.locator(`#edit-record-${rowNumber}`).getByRole('img')
    await editButton.click()

    if (data.firstname) {
    await this.firstname.fill('');
    await this.firstname.type(data.firstname);
    }

    if (data.lastname) {
      await this.lastname.fill('');
      await this.lastname.type(data.lastname);
    }

    if (data.email) {
      await this.email.fill('');
      await this.email.type(data.email);
    }

    if (data.age) {
      await this.age.fill('');
      await this.age.type(data.age);
    }

    if (data.salary) {
      await this.salary.fill('');
      await this.salary.type(data.salary);
    }

    if (data.department) {
      await this.department.fill('');
      await this.department.type(data.department);
    }

    await this.submit.click()
    console.log(`Berhasil edit data baris ${rowNumber}`)
  }

  Hapus = async (page) => {
    await this.delbtn4.click()
  }
}