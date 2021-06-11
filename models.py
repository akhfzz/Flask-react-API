import config
import pymysql

db = cur = None

class Guest:
	def openDB(self):
		global db, cur
		db = pymysql.connect(
				host=config.host,
				user=config.user,
				password=config.password,
				database=config.database
			)
		cur = db.cursor()

	def closeDB(self):
		global db, cur
		db.close()

	def selectGuest(self):
		self.openDB()
		cur.execute("SELECT * FROM guest")
		dataList = []
		for x in cur.fetchall():
			container = {}
			container['id'] = x[0]
			container['nama'] = x[1]
			container['noHp'] = x[2]
			container['alamat'] = x[3]
			container['status'] = x[4]
			container['idacara'] = x[5]
			dataList.append(container)
		return dataList