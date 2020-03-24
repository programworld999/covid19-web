import os

def main(mloc):
	input("Build(just enter): ")
	try:
		os.system("npm run build")
		pass
	except:
		print("Unabl To Run 'npm build'")
		return 0
	os.system('cp ./build/* "'+mloc+'" -r')
	print("Deployed");
	main(mloc)


if __name__ == "__main__":
	mloc = str(input("Mobile location: "));
	print(mloc)
	main(mloc)
