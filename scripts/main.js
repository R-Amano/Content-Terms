async function gethtml(url, id) {
	try {
    const response = await fetch(url + ".html");
    if (!response.ok) throw new Error("ファイルが見つかりません");
    
    const data = await response.text();
    document.getElementById(id).innerHTML = data;
  } catch (error) {
    console.error(error);
    document.getElementById(id).innerHTML = "エラーが発生しました";
  }
}
